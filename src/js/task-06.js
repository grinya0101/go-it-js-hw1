const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    console.log(event.currentTarget.value.length);
    if(event.currentTarget.value.length >= inputEl.dataset.length){
       
        inputEl.classList.add('valid')
            inputEl.classList.remove('invalid')
        
        
    }else{
       
        inputEl.classList.add('invalid')
            inputEl.classList.remove('valid')
            
        
    }
    
}