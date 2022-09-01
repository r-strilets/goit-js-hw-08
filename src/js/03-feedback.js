const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};
// let oldData = {};
console.log(formData);
feedbackForm.email.value = formData.email ?? '';
feedbackForm.message.value = formData.message ?? '';

feedbackForm.addEventListener('input', throttle(newFormData, 500));
function newFormData(e) {
  formData[e.target.name] = e.target.value;
  if (!e.target.elements.email.value) {
    document.querySelector('button').disabled = true;
  }
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', onClickFormSubmit);
function onClickFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(formData);
  formData = {};

  localStorage.removeItem(FEEDBACK_KEY);
}
