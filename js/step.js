const uploadInput = document.getElementById('upload-file-step-input');
const uploadBlock = document.getElementById('uploading-file-step');
const dropCenter = document.querySelector('.files-drag-drop-center');

const upload_box = document.querySelector('.upload-box');
const upload_box_img = document.querySelector('.upload-box img')


uploadInput.addEventListener('change', function (e){
    const files  = [...e.target.files];
    files.forEach((file) => startPrintHtml(file))
})


dropCenter.addEventListener('dragover', function (e) {
    e.preventDefault()
})

dropCenter.addEventListener('dragenter', function (){
    upload_box.classList.add(active)
})

upload_box_img.addEventListener('dragleave', () => upload_box.classList.remove(active))
upload_box_img.addEventListener('dragover', function (e) {
    e.preventDefault();
})
upload_box_img.addEventListener('drop', function (e){
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer.files];
    upload_box.classList.remove(active);
    files.forEach((file) => startPrintHtml(file))
})

function startPrintHtml(file){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const imageUrl = file.type !== 'application/pdf' ? reader.result : 'assets/images/pdef-image.svg';
        const RandomId = Math.floor(Math.random() * 100000) + '_aniox';
        uploadBlock.insertAdjacentHTML('beforeend',
            `
                   <div class="files-drag-drop-center-item" id="${RandomId}">
                        <div class="files-drag-drop-center-item-info">
                          <img src="${imageUrl}" alt="uesr-passport" class="file-image" onclick="openModalViewImage('${imageUrl}', '${RandomId}', '${file.type}')">
                          <span>${file.name}</span>
                        </div>
                        <img class="fa-trash" src="assets/icons/remove-img-steps.svg" alt="trash">
                   </div>
                `)
        startRemoveItem()
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}


const viewBlockClose = document.querySelector('.view-image-content-image-information svg');
const viewBlock = document.querySelector('.view-image');

viewBlockClose.addEventListener('click', function (){
    viewBlock.classList.remove(active);
})

function openModalViewImage(image, id, type){
    if(type !== 'application/pdf'){
        viewBlock.classList.add(active);
        $element('.view-image-content-image').setAttribute('src', image)
        $element('.view-image svg').setAttribute('data-id', id);
        removeItemToModal(id)
    }
}

function startRemoveItem(){
    $('.files-drag-drop-center-item .fa-trash').forEach((item) => {
        item.addEventListener('click', function (){
            this.parentElement.remove();
        })
    })
}

function removeItemToModal(id){
    $element('.view-image-content-image-information-remove').addEventListener('click', function (){
        viewBlock.classList.remove(active);
        const _elem = document.getElementById(id);
        if(_elem){
            document.getElementById(id).remove()
        }
    })
}

