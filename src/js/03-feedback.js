const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');
const isButtonActive = document.querySelector('button');
const FEEDBACK_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};

feedbackForm.email.value = formData.email ?? '';
feedbackForm.message.value = formData.message ?? '';

isButtonActive.disabled = true;

feedbackForm.addEventListener('input', throttle(newFormData, 500));
function newFormData(e) {
  formData[e.target.name] = e.target.value;

  document.querySelector('button').disabled = false;

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', onClickFormSubmit);
function onClickFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(formData);
  formData = {};
  localStorage.removeItem(FEEDBACK_KEY);
  document.querySelector('button').disabled = true;
}
