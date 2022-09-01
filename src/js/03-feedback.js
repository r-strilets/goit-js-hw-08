const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';
let formData = {};

feedbackForm.addEventListener('input', throttle(newFormData, 500));
function newFormData(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', onClickFormSubmit);

try {
  const oldData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  feedbackForm.email.value = oldData.email;
  feedbackForm.message.value = oldData.message;
} catch (e) {
  console.log('no data in locale storage');
}
function onClickFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(formData);
  formData = '';
  localStorage.clear();
}
