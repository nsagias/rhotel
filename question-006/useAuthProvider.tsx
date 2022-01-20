// 6. Consider the code below, please describe what you would change 
// to improve this code.


// fix spelling
const useAuthProvider = () => {
  const [tenantId, setTenantId] = useState(
    window.localStorage.getItem('tenantId'),
  );
  // create interface/ set type for userId
  // add useEffect to check if window.localStorage.getItem('userId')) if true setUserId
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));  // 
  const [accessToken, setAccessToken] = useState(
    // I would not use localstorage as it not secure for auth
    window.localStorage.getItem('access_token'),  
  );
  const history = useHistory();
  // user login
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
          // throw error and cat the catch(e) below 
          alert('Unauthorized User');
        } else {
          window.localStorage.setItem('userId', response.data.userId);
          setUserId(response.data.userId);
          window.localStorage.setItem('tenantId', response.data.tenantId);
          setTenantId(response.data.tenantId);
          // remove id from appearing in console
          console.log('tenantId:' + tenantId);
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
  };
