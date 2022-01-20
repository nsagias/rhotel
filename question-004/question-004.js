var server_echo;  // declared as var and can be  re-assigned by another function
var json = {  // naming method doesn't clarify whta is being sent, difficult to read/debug
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
}; // declared as var and can be  re-assigned by another function 


// complete path is missing
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    // sending a URI when the type listed is json
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    server_echo = response.json().echo  // not a function for javascript
    return response.json();
})
.then(function (result) {
  // function declares and alert for a browser as a result
  // don't see the purpose for a fetch call to do this.
    alert(result);  
})
.catch (function (error) {
    console.log('Request failed', error);
});

// original declaration is with out a type/interface as empty variable
// this will return and error if it is not an array[]
server_echo.forEach(
    element => console.log(element)
)
