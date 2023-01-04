import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);
document.addEventListener('DOMContentLoaded', onSiteReload);

function onFormInput() {
    const data = {};
    data.email = emailEl.value;
    data.message = textareaEl.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    console.log(data)
};

let retDataItem = localStorage.getItem(STORAGE_KEY);

function onSiteReload() {
    if (retDataItem) {
        let storageData = JSON.parse(retDataItem);
        emailEl.value = storageData.email;
        textareaEl.value = storageData.message;
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(retDataItem));
    localStorage.removeItem(STORAGE_KEY);
    emailEl.value = '';
    textareaEl.value = '';
}

