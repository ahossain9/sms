"use strict";

axios.get('https://sms.airproxy.io/en/api/sms/get_number', {
   auth: {
    username: 'AmirSMS',
    password: 'fn3nc38DAef'
  } 
})
    .then(function (res) {
        function displayNumber() {
            document.querySelector(".show-number").innerHTML = res.data[3]['name'];
        }
        document.querySelector(".get-number-btn").addEventListener("click", displayNumber);
    })
    .catch(function (err) {
        document.querySelector(".show-number").innerHTML = err;
    })



//fetch('https://sms.airproxy.io/api/sms')
//    .then(response => response.json())
//    .then(json => console.log(json))

