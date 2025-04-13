document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
   
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const errorDiv = document.getElementById("errorDiv");
        errorDiv.textContent = "";
   
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const terms = document.getElementById("terms").checked;
   
        const usernameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[\w.-]+@(gmail|yahoo|hotmail)\.com$/;
        const passRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
   
        if (!usernameRegex.test(username)) {
            errorDiv.textContent = "Please enter a valid full name (letters and spaces only).";
            return;
        }
   
        if (!emailRegex.test(email)) {
            errorDiv.textContent = "Email must be from Gmail, Yahoo, or Hotmail.";
            return;
        }
   
        if (!passRegex.test(password)) {
            errorDiv.textContent = "Password must be at least 8 characters and alphanumeric.";
            return;
        }
   
        if (password !== confirmPassword) {
            errorDiv.textContent = "Passwords do not match.";
            return;
        }
   
        if (!dob) {
            errorDiv.textContent = "Please enter your date of birth.";
            return;
        }
   
        const dobDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const m = today.getMonth() - dobDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
   
        if (age < 18) {
            errorDiv.textContent = "You must be at least 18 years old.";
            return;
        }
   
        if (!gender) {
            errorDiv.textContent = "Please select a gender.";
            return;
        }
   
        if (!country) {
            errorDiv.textContent = "Please select your country.";
            return;
        }
   
        if (!terms) {
            errorDiv.textContent = "You must agree to the terms and conditions.";
            return;
        }
   
        // If all validations pass, submit the form
        alert("Form submitted successfully!");
        form.removeEventListener("submit", arguments.callee); // Remove the event listener
        form.submit(); // Submit the form
    });
  });