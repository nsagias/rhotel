var server_echo;  // declared as var and can be  re-assigned by another function
var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
}; // declared as var and can be  re-assigned by another function, naming difficult to read
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    server_echo = response.json().echo  // not a function  for javascript
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});

// original declaration is with out a type/interface
// this will return and error if it is not an array[]
server_echo.forEach(
    element => console.log(element)
)
