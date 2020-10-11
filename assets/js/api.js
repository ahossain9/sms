"use strict";
fetch('https://sms.airproxy.io/api/sms')
    .then(response => response.json())
    .then(json => console.log(json))
