

const bottomLeft = $element('.new-request .botom-left')
const exit_newRequest = $element('.new-request .exit-newRequest')
const fields_new_ticket = $element('.technical-support .fields-new-ticket')
const new_request = $element('.new-request')
const form = $element('.new-request .form')
const loading_btn = $element('.new-request .footer-buttons-btn')
const loading_input = $element('.input-loading')
const upload_box = $element('.upload-box')
const upload_box_img = $element('.upload-box img')
const todos = $element('.todos')

//  btn loading

loading_btn.addEventListener('click', startValidation)


function startValidation(){
  loading_btn.classList.remove(btnLoading)
}

// open modal

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

// file todos

loading_input.addEventListener('change', (e)=>{
    const todo_item = document.createElement('div')
    todo_item.classList.add('todo-item')
    todo_item.insertAdjacentHTML('beforeend', ` ${e.target.files[0].name}
    <img class="fa-trash" src="assets/icons/fa-trash.svg" alt="trash">`)
      todos.appendChild(todo_item)
})

todos.addEventListener('click', (e)=>{
  let item = e.target
  if(item.classList[0] === 'fa-trash'){
    let todo = item.parentElement;
      todo.remove()
  }
})



// drag over

upload_box.addEventListener('dragover', dragOverFunc)
form.addEventListener('dragenter', dragEnterFunc)
upload_box_img.addEventListener('dragleave', dragLeaveFunc)
upload_box_img.addEventListener('drop', dropFunc)


function dragOverFunc(event){
  event.preventDefault()
}

function dragEnterFunc(e){
 upload_box.classList.add(active)
}

function dragLeaveFunc(){
  upload_box.classList.remove(active)
}

function dropFunc(e){
  e.preventDefault();
  e.stopPropagation();
  console.log( e.dataTransfer.files)
  upload_box.classList.remove(active)
  let filesObj = [...e.dataTransfer.files];


  filesObj.forEach((file) => {
    const todo_item = document.createElement('div')
    todo_item.classList.add('todo-item')
    todo_item.insertAdjacentHTML('beforeend', ` ${file.name}
    <img class="fa-trash" src="assets/icons/fa-trash.svg" alt="trash">`);
    todos.appendChild(todo_item)
  })

  // let filesName = []
  // for(let elem of filesObj){
  //  filesName.push(elem.name)
  // }
  // console.log(filesName)
  // todo_item.insertAdjacentHTML('beforeend', ` ${filesName.forEach(el =>{el} )}
  //   <img class="fa-trash" src="assets/icons/fa-trash.svg" alt="trash">`)
  // todos.appendChild(todo_item)
}

