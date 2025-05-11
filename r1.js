
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting by default
  const errors = [];

  // Clear previous errors
  document.getElementById("errorBox").innerHTML = "";

  const fullname = document.forms[0]["fullname"].value.trim();
  const email = document.forms[0]["email"].value.trim();
  const password = document.forms[0]["password"].value;
  const confirmPassword = document.forms[0]["confirmpassword"].value;
  const dob = document.forms[0]["dob"].value;
  const country = document.forms[0].querySelector("select").value;
  const gender = document.forms[0].querySelector("input[name='gender']:checked");
  const terms = document.forms[0]["terms"].checked;

  // Username validation (Only letters, periods, and hyphens allowed)
  //const fullnameRegex = /^[a-zA-Z.\-]+$/;
   const fullnameRegex = /^[a-zA-Z\s]+$/; 
  if (!fullnameRegex.test(fullname)) {
      errors.push("Username can onsly contain letters, periods (.), and hyphens (-). No digits or special characters.");
  }

  // Email validation (Only Gmail, Yahoo, Hotmail)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail)\.com$/;
  if (!emailRegex.test(email)) {
      errors.push("Email must be from Gmail, Yahoo, or Hotmail.");
  }

  // Password validation
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
      errors.push("Password must be at least 8 characters long and alphanumeric.");
  }
  if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
  }

  // DOB validation (Age must be over 18)
  if (dob === "") {
      errors.push("Date of Birth is required.");
  } else {
      const birthDate = new Date(dob);
      const ageDifMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDifMs);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (age < 18) {
          errors.push("You must be at least 18 years old.");
      }
  }

  // Gender validation
  if (!gender) {
      errors.push("Gender must be selected.");
  }

  // Country validation
  if (!country) {
      errors.push("Country must be selected.");
  }

  // Terms and conditions validation
  if (!terms) {
      errors.push("You must agree to the Terms and Conditions.");
  }

  if (errors.length > 0) {
      const errorBox = document.getElementById("errorBox");
      errorBox.innerHTML = "<ul style='color:red;'>" + errors.map(e => "<li>" + e + "</li>").join("") + "</ul>";
      return false;
  }

  alert("Form submitted successfully!");
  return true;
}
