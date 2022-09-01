const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';
const formData = {};
let oldData = {};

feedbackForm.addEventListener('input', throttle(newFormData, 500));
function newFormData(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

try {
  oldData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  feedbackForm.email.value = oldData.email;
  feedbackForm.message.value = oldData.message;
} catch (e) {
  console.log('no data in locale storage');
}
feedbackForm.addEventListener('submit', onClickFormSubmit);
function onClickFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(oldData);
  oldData = '';

  localStorage.removeItem(FEEDBACK_KEY);
}
