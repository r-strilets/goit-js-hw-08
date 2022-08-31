const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';
const formData = {};

feedbackForm.addEventListener('input', throttle(newFormData, 500));
function newFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', onClickFormSubmit);
function onClickFormSubmit(e) {
  localStorage.clear();
  e.target.reset();
}
try {
  const newData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  feedbackForm.email.value = newData.email;
  feedbackForm.message.value = newData.message;
} catch (e) {
  console.log('no data in locale storage');
}
