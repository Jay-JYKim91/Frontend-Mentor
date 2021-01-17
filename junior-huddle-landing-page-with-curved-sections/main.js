const emailForm = document.querySelector("#email");
const submitBtn = document.querySelector("#submit-btn");
const resultText = document.querySelector(".result-text");

submitBtn.addEventListener("click", event => {
  event.preventDefault();
  validateEmail(emailForm.value);
})

function validateEmail(userEmail) {
  const emailRegex = /^([a-zA-Z]{1,})([\w \. \-]+)(\@[\w]{3,8})(\.[a-zA-Z]{2,4})(\.[a-zA-Z]{2,3})?$/;
  if (userEmail) {
    if (userEmail.match(emailRegex)) {
      showSuccess();
    } else {
      showError("invalid");
    }
  } else showError("empty")
}

const showError = (err) => {
  resultText.classList.remove("valid");
  resultText.classList.add("error");
  emailForm.classList.add('inputRed');
  switch (err) {
    case "invalid":
      resultText.textContent = "Please enter a valid email address"
      break;
    case "empty":
      resultText.textContent = "Please enter your email address"
      break;
  }
}

const showSuccess = () => {
  resultText.classList.remove("error");
  emailForm.classList.remove('inputRed');
  resultText.classList.add("valid");
  emailForm.classList.add('inputGreen');
  resultText.textContent = "Valid email address"
}
