// ===========================================
// SMART AGRICULTURE LOGIN SYSTEM
// script.js
// ===========================================

// Show / Hide Password

function togglePassword() {

    const password = document.getElementById("password");

    const eyeIcon = document.querySelector(".eye i");

    if (password.type === "password") {

        password.type = "text";

        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");

    }
}


// ===========================================
// Login Validation
// ===========================================

const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.querySelector("input[type='email']").value.trim();

    const password = document.getElementById("password").value.trim();


    // Empty Fields

    if (email === "" || password === "") {

        alert("Please fill all fields.");

        return;

    }


    // Email Validation

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    // Password Length

    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;

    }


    // Demo Login

    const demoEmail = "farmer@gmail.com";

    const demoPassword = "123456";


    if (email === demoEmail && password === demoPassword) {

        alert("Login Successful!");

        // Redirect

        window.location.href = "dashboard.html";

    }

    else {

        alert("Invalid Email or Password.");

    }

});


// ===========================================
// Enter Key Support
// ===========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        loginForm.dispatchEvent(new Event("submit"));

    }

});


// ===========================================
// Input Focus Effect
// ===========================================

const inputs = document.querySelectorAll("input");

inputs.forEach(function(input){

    input.addEventListener("focus",function(){

        input.parentElement.style.transform="scale(1.02)";

    });

    input.addEventListener("blur",function(){

        input.parentElement.style.transform="scale(1)";

    });

});


// ===========================================
// Welcome Message
// ===========================================

window.onload = function(){

    console.log("🌱 Smart Agriculture Login Loaded Successfully");

};


// ===========================================
// Future Features
// ===========================================

// 1. Login with MySQL Database
// 2. Login using Flask Backend
// 3. Forgot Password
// 4. OTP Verification
// 5. Google Login
// 6. Fingerprint Login
// 7. Face Recognition Login
// 8. Farmer/Admin Login
// 9. Dark Mode
// 10. Remember Me using Local Storage