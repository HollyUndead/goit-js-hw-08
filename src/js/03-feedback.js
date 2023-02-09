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
    localStorage.setItem('email', email.value)
    console.log(localStorage.getItem('email'));
    localStorage.setItem('message', message.value)
    console.log(localStorage.getItem('message'));
}

let timeout = throttle(pushToLocalStorage, 500)

email.addEventListener('input', timeout)
message.addEventListener('input', timeout)

form.addEventListener('submit', function(event){
    event.preventDefault()
    obj.email = localStorage.getItem('email')
    obj.message = localStorage.getItem('message')
    console.log(obj);
    localStorage.setItem('email', '')
    localStorage.setItem('message', '')
    form.reset()
})