const data = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveData);
form.addEventListener('submit', handleSubmit);

function saveData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(data, JSON.stringify(formData));
}
const savedData = localStorage.getItem(data);

if (savedData) {
  const formData = JSON.parse(savedData);
  form.email.value = formData.email;
  form.message.value = formData.message;
  //   console.log(formData);
}
function handleSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
    localStorage.removeItem(data);
    formData = { email: '', message: '' };
    form.reset();
  }
}
