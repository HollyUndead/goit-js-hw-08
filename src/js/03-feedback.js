import throttle from 'lodash.throttle';

const email = document.querySelector('input')
const message = document.querySelector('textarea')
const form = document.querySelector('.feedback-form')
let obj = {
    email: '',
    message: ''
}

document.addEventListener('DOMContentLoaded', function(){
    const obj = JSON.parse(localStorage.getItem('feedback-form-state'))
    if(obj != undefined){
        if(email != ''){
            email.value = obj.email
        }
        if(message != ''){
            message.value = obj.message
        }
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
    const localItem = JSON.parse(localStorage.getItem('feedback-form-state'))
    if(email.value == ''){
        alert('Please, enter email!')
        return
    }
    if(message.value == ''){
        alert('Please, enter message!')
        return
    }
    console.log(localItem);
    localStorage.clear()
    form.reset()
})