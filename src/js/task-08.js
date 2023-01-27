// const email = document.querySelector()
const formEl = document.querySelector('.login-form')

console.log(formEl);

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const formElements = event.currentTarget.elements

    const mail = formElements.email.value
    
    const password = formElements.password.value
   
    if ( mail === '' || password === '') {
        alert('Заполни все поля формы');
     }

     console.log(formData);

     event.currentTarget.reset()
}