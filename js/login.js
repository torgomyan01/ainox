
const btnEmail = document.querySelector('.btn-email');
const inputEmail = document.querySelector('.email-input');
const inputKod = document.querySelector('.input-kod');
const passwordEmail = document.querySelector('.email-password');
const footerEmail = document.querySelector('.email-footer');
const emailKod = document.querySelector('.email-kod');
const fieldsKod = document.querySelector('.input-kod .fields-kod');

emailKod.addEventListener('input', checkCodeActivate);

let checkKey = true;

function checkCodeActivate(e){
    if(e.target.value.length === 9){
        fieldsKod.classList.add(btnLoading)
        setTimeout(() => {
            inputKod.classList.remove(active)
            passwordEmail.classList.add(active)
        },2000)
    }
}

inputEmail.addEventListener('keyup', function (e){
    document.getElementById('email-alert').classList.add(none);
    if(e.key === 'Enter'){
        startValidation()
    }
})

btnEmail.addEventListener('click', startValidation)

function startValidation(){
    if(checkKey){
        if(validateEmail(inputEmail.value)){
            checkKey = false;
            document.getElementById('email-alert').classList.add(none);
            inputKod.classList.add(active)
            footerEmail.style.display = 'none'
        } else {
            document.getElementById('email-alert').classList.remove(none);
        }
    } else {
        btnEmail.classList.add(btnLoading)
        setTimeout(() => btnEmail.classList.remove(btnLoading), 2000)
    }
}
