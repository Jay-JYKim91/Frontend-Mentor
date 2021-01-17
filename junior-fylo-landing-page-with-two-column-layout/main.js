const emailForm = document.querySelector("#email");
const submitBtn = document.querySelector("#submit-btn");
const resultText = document.querySelector(".result-text");

const emailFormLast = document.querySelector("#email-last");
const submitBtnLast = document.querySelector("#submit-btn-last");
const resultTextLast = document.querySelector(".result-text-last");

submitBtn.addEventListener("click", event => {
  event.preventDefault();
  validateEmail(emailForm.value);
})

submitBtnLast.addEventListener('click', event => {
  event.preventDefault();
  validateEmailLast(emailFormLast.value);
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

function validateEmailLast(userEmail) {
  const emailRegex = /^([a-zA-Z]{1,})([\w \. \-]+)(\@[\w]{3,8})(\.[a-zA-Z]{2,4})(\.[a-zA-Z]{2,3})?$/;

  if (userEmail) {
    if (userEmail.match(emailRegex)) {
      showSuccessLast();
    } else {
      showErrorLast("invalid");
    }
  } else showErrorLast("empty")
}

const showError = (err) => {
  resultText.classList.remove("valid");
  emailForm.classList.add('inputRed');
  resultText.classList.add("error");
  switch (err) {
    case "invalid":
      resultText.textContent = "Please enter a valid email address"
      break;
    case "empty":
      resultText.textContent = "Please enter your email address"
      break;
  }
}

const showErrorLast = (err) => {
  resultTextLast.classList.remove("valid");
  emailFormLast.classList.add('inputRed');
  resultTextLast.classList.add("error");
  switch (err) {
    case "invalid":
      resultTextLast.textContent = "Please enter a valid email address"
      break;
    case "empty":
      resultTextLast.textContent = "Please enter your email address"
      break;
  }
}

const showSuccess = () => {
  resultText.classList.remove("error");
  resultText.classList.add("valid");
  resultText.textContent = "Valid email address"
}

const showSuccessLast = () => {
  resultTextLast.classList.remove("error");
  resultTextLast.classList.add("valid");
  resultTextLast.textContent = "Valid email address"
}
