// js for client ip address
$.getJSON("https://api.ipify.org?format=json",

    function(data) {

        $("#usrip").text(data.ip);

    })