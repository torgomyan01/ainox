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
                          <img src="${imageUrl}" alt="uesr-passport" class="file-image" onclick="openModalViewImage('${imageUrl}', '${RandomId}', '${file.type}', '${file.name}')">
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

function openModalViewImage(image, id, type, name){
    if(type !== 'application/pdf'){
        viewBlock.classList.add(active);
        $element('.view-image-content-image').setAttribute('src', image)
        $element('.view-image svg').setAttribute('data-id', id);
        $element('.view-image-content-image-information-text').innerHTML = `
            <img src="assets/icons/trash-white.svg" alt="trash-white" class="view-image-content-image-information-remove">
            ${name}
        `;
        removeItemToModal(id);
        document.body.style.overflow = 'hidden';
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

$('.change-step').forEach((item) => {
    item.addEventListener('click', function (){
        const stepPage = this.dataset.step;
        changeStepBlock(stepPage)
        setActiveList(+stepPage - 1)
    })
})

$element('.mobile-menu-board').addEventListener('click', function (){

    if(this.classList.contains(active)){
        this.classList.toggle(active)
        $element('.step-page-row-right').classList.remove(active)
        $element('.menu-back-fon').classList.remove(active);
        $element('.navbar').classList.remove(active);
    } else {
        this.classList.toggle(active)
        $element('.step-page-row-right').classList.add(active)
        $element('.menu-back-fon').classList.add(active);
        $element('.navbar').classList.add(active);
        profileDropdowns.forEach((item) => {
            item.classList.remove(active)
        })
    }


})

$element('.menu-back-fon').addEventListener('click', function (){
    $element('.mobile-menu-board').classList.remove(active);
    $element('.step-page-row-right').classList.remove(active);
    $element('.navbar').classList.remove(active)
})


$element('.view-image-bg').addEventListener('click', function (){
    this.parentElement.classList.remove(active);


    document.body.style.overflow = null;
})

const menuList = $('.menu-list-with-content');
function setActiveList(count){
    menuList.forEach((element, index) => {
        element.classList.remove(active);
        element.classList.remove('no-active');
        if(index === count){
            element.classList.add(active)
        } else if(index > count){
            element.classList.add('no-active')
        }
    })
}

function changeStepBlock(stepPage){
    $('.steps-block').forEach((stepBlock) => stepBlock.classList.add(none));
    $element(`.steps-block[data-step="${stepPage}"]`).classList.remove(none);
}

menuList.forEach((item, index) => {
    item.addEventListener('click', function (){
        if(!this.classList.contains(active) && !this.classList.contains('no-active') && index < 3){
            setActiveList(index);
            changeStepBlock(index + 1);
        }
    })
})

const errorForInn = $element('#error-for-inn');
const errorForInnCount = $element('#error-for-inn-count');

$element('.def-fields-input.mask-physical').addEventListener('keyup', function (){
    const val = this.value;
    const maskCount = 12;

    if(val.length < maskCount){
        errorForInn.classList.remove(none);
        errorForInnCount.innerText = `+${maskCount - val.length}`;
        $element('.def-fields.for-inn').classList.remove('mb-15');
    } else if(val.length === maskCount){
        errorForInn.classList.add(none);
        $element('.def-fields.for-inn').classList.add('mb-15');
    }
})


