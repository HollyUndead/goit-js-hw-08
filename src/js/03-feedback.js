var throttle = require('lodash.throttle');

const email = document.querySelector('input')
const message = document.querySelector('textarea')
const form = document.querySelector('.feedback-form')
let obj = {
    email: '',
    message: ''
}

document.addEventListener('DOMContentLoaded', function(){
    const emailStored = localStorage.getItem('email')
    const messageStored = localStorage.getItem('message')
    if(email != ''){
        email.value = emailStored
    }
    if(message != ''){
        message.value = messageStored
    }
})

function pushToLocalStorage(){
    obj.email = email.value;
    obj.message = message.value
    localStorage.setItem('feedback-form-state', JSON.stringify(obj))
}

let timeout = throttle(pushToLocalStorage, 500)

email.addEventListener('input', timeout)
message.addEventListener('input', timeout)

form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(localStorage.getItem('feedback-form-state'));
    form.reset()
})