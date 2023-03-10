

import throttle from "lodash.throttle";


// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект 
// с полями email и message, в которых сохраняй текущие значения полей формы.
// Пусть ключом для хранилища будет строка "feedback-form-state".

const form = document.querySelector('form');

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));

const STORAGE_KEY = 'feedback-form-state';


function formSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); 

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);  
};


function formInput(event) {  
  let feedbackFormData = localStorage.getItem(STORAGE_KEY);
  
  feedbackFormData = feedbackFormData ? JSON.parse(feedbackFormData) : {};  
  feedbackFormData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));  
};



function getDataFromLocalStorage() {
  let localStorageData = localStorage.getItem(STORAGE_KEY);  

  if (localStorageData) {
    localStorageData = JSON.parse(localStorageData);
    
    for (const [key, value] of Object.entries(localStorageData)) {      
      form.elements[key].value = value;      
    }    
  }
};
getDataFromLocalStorage();