// 6. Consider the code below, please describe what you would change 
// to improve this code.




// add imports
// import React, { createContext, useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

export const authContext = createContext();

// fix spelling
// add props 
const useAuthProvider = (props) => {
  // getting logic direct from useState, shoule be a variable  before  
  // or  useEffect to a variable
  // no error handly if  empty 
  const [tenantId, setTenantId] = useState(
    window.localStorage.getItem('tenantId'),
  );
  // create interface/ set type for userId
  // add useEffect to check if window.localStorage.getItem('userId')) if true setUserId
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));  // 
  // getting logic direct from useState, shoule be a variable  before  
  // or  useEffect to a variable
  // no error handly if  empty 
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem('access_token'),  
  );
  // wrap in a useHistory in handler
  const history = useHistory();
  
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

          // use variables and not handled data directly
          // could refactor into a handleSetItem()
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
    
    // complete the provider component
    // const data = { userLogin, tenantId, userId, accessToken, history };

    // return (
    //   < authContext.Provider value = {data}>
    //     {props.children}
    //   </ authContext.Provider>
    // )
  
  };

  // function is not exported
  // export default useAuthProvider;


