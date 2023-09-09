function otpgenerator() {
    var digit = "1234567890";
    var otp = "";

    for (let i = 0; i < 4; i++) {
        otp = otp + digit[Math.floor(Math.random() * 10)];
    }
    document.getElementById("showotp").innerHTML = otp;

}