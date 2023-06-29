

const bottomLeft = document.querySelector('.new-request .botom-left')
const exit_newRequest = document.querySelector('.new-request .exit-newRequest')
const fields_new_ticket = document.querySelector('.technical-support .fields-new-ticket')
const new_request = document.querySelector('.new-request')
const loading_btn = document.querySelector('.new-request .footer-buttons-btn')
const loading_input = document.querySelector('.input-loading')


loading_input.addEventListener('change', (e)=>{

})


loading_btn.addEventListener('click', startValidation)


function startValidation(){
  loading_btn.classList.add(btnLoading)
  setTimeout(() => loading_btn.classList.remove(btnLoading), 2000)
}




bottomLeft.addEventListener('click', extiRequest)
fields_new_ticket.addEventListener('click',  openRequest)
exit_newRequest.addEventListener('click', closeRequest)

function openRequest(){
  new_request.classList.remove('close')
  new_request.classList.add('active')
}

function extiRequest(){
  new_request.classList.remove('active')
}

function closeRequest (){
  new_request.classList.add('close')
}