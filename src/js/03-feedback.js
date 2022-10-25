import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onTextareaInput, 500));

let formData = {};

saveData();

function onFormSubmit(evt){
    evt.preventDefault();   
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}

function saveData(){
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormData);

    if (parsedFormData) {
        formData = parsedFormData;
        refs.input.value = formData.email || '';
        refs.textarea.value = formData.message || '';
      }
}