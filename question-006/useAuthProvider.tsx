// 6. Consider the code below, please describe what you would change 
// to improve this code.
import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// fix spelling
const useAuthProvider = () => {
  const [tenantId, setTenantId] = useState(
    window.localStorage.getItem('tenantId'),
  );
  // create interface/ set type for userId
  // add useEffect to check if window.localStorage.getItem('userId')) if true setUserId
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));  // 
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem('access_token'),  
  );
  // wrap in a useHistory in handler
  const history = useHistory();
  // user login is never use, if user loging false?
  const userLogin = async (
    email: string,
    password: string,
    redirectPath: string,
  ) => {
    try {
      const response = await axios({
        method: 'post',
        url: `https://domain.com/api/login`,
        data: {
          email,
          password,
        },
      });
      if (response.data) {
        // remove console log
        console.log(JSON.stringify(response.data, null, 2));
        if (response.data.type !== 'tenant') {
          // remove alert
          // throw error and catch(e) below do not print console.log
          alert('Unauthorized User');
        } else {
          // if using provider should not be using windows localstorage
          window.localStorage.setItem('userId', response.data.userId);
          setUserId(response.data.userId);
          window.localStorage.setItem('tenantId', response.data.tenantId);
          setTenantId(response.data.tenantId);
          // remove id from appearing in console
          console.log('tenantId:' + tenantId);

          // access token set
          window.localStorage.setItem(
            'access_token',
            response.data.accessToken,
          );
          setAccessToken(response.data.accessToken);
          history.push(redirectPath);
        }
      }
    } catch (e) {
      // remove this as it exposes and error
      // cat the error and leve it empty
      alert('Error Happened');
    }
    
    // hooks 
    // return { userLogin, tenantId, userId, accessToken, history };
  };

  // function is not exported
  // export default useAuthProvider;


