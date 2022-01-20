// 6. Consider the code below, please describe what you would change 
// to improve this code.


const useAuthProvide = () => {
  const [tenantId, setTenantId] = useState(
    window.localStorage.getItem('tenantId'),
  );
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
  const [accessToken, setAccessToken] = useState(
    // I would not use localstorage as it not secure for auth
    window.localStorage.getItem('access_token'),  
  );
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
        console.log(JSON.stringify(response.data, null, 2));
        if (response.data.type !== 'tenant') {
          // alert('Unauthorized User');
        } else {
          window.localStorage.setItem('userId', response.data.userId);
          setUserId(response.data.userId);
          window.localStorage.setItem('tenantId', response.data.tenantId);
          setTenantId(response.data.tenantId);
          // remove id from appearing in console
          // console.log('tenantId:' + tenantId);
          window.localStorage.setItem(
            'access_token',
            response.data.accessToken,
          );
          setAccessToken(response.data.accessToken);
          history.push(redirectPath);
        }
      }
    } catch (e) {
      // alert('Error Happened');
    }
  };
