function OTPlessScript() {
    const OTPlessAuthScript = document.getElementById("OTPless-Main-Auth-Script");
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth-new.js?version=1.0.26";
    script.id = "OTPless-Main-Auth-Script";
    script.setAttribute("platform", "JS");
    const OTPlessScript = document.getElementById("otpless-sdk");
    if (OTPlessScript) {
        if (OTPlessScript.getAttribute("avatar")) script.setAttribute("avatar", OTPlessScript.getAttribute("avatar"));
        if (OTPlessScript.getAttribute("platform")) script.setAttribute("platform", OTPlessScript.getAttribute("platform"));
    }
    const head = document.querySelectorAll("head")[0];
    !!!OTPlessAuthScript && head.insertBefore(script, head.firstChild);
}

const OTPlessCallbackAction = (otplessUser) => {
    if (!!window.otpless) {
        window.otpless?.(otplessUser)
    } else {
        console.log({
            otplessUser
        })
        console.error("OTP-less callback not found");
        console.log(`Please add the below function to get the "otpless callback" 

function otpless(otplessUser) {
    var waName = otplessUser.waName;
    var waNumber = otplessUser.waNumber;
    // Signup/signin the user and redirect to next page
    }
`)
    }
};

OTPlessScript();

