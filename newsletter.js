/* eslint-disable space-before-function-paren */
/* eslint-disable semi */

const formContainer = document.querySelector('.form');
const successMessage = document.querySelector('.success-message')
const form = document.querySelector('form');
const warnText = form.querySelector('.error-msg');
const submitButton = form.querySelector('#submit-btn');
const confirmationMsg = document.querySelector('.confirmation');
const dismissBtn = document.querySelector('.dismiss-btn');

function handleInput(e) {
  const input = e.target;
  const userEmail = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!(userEmail.length >= 1)) {
    input.classList.remove('warn');
    submitButton.disabled = true;
  } else if (!emailRegex.test(userEmail)) {
    input.classList.add('warn');
    warnText.hidden = false;
    submitButton.disabled = true;
  } else {
    input.classList.remove('warn');
    warnText.hidden = true;
    submitButton.disabled = false;
  }
}

function handleForm(e) {
  e.preventDefault();
  const email = e.target.querySelector('#email').value;

  confirmationMsg.innerHTML = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
  formContainer.style.display = 'none';
  successMessage.hidden = false;
}

function handleDismissBtn() {
  successMessage.hidden = true;
  formContainer.style.display = 'grid';
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleForm);
dismissBtn.addEventListener('click', handleDismissBtn);
