const $ = (className) => document.querySelectorAll(className);


class ToolMasks {
    static numberMaskElements = $('.mask-phone');
    static maskOneKeyElements = $('.mask-one-key');
    static maskPhysicalElements = $('.mask-physical');
    static maskJurlitsaElements = $('.mask-jurlitsa');
    static maskOrgnElements = $('.mask-orgn');
    static maskOrgnipElements = $('.mask-orgnip');
    static maskSerialPassportElements = $('.mask-serial-passport');
    static maskBikElements = $('.mask-bik');
    static maskCheckingAccountElements = $('.mask-checking-account');

    constructor() {
    }


    static russianPhoneMask(){
        this.numberMaskElements.forEach((item) => this.startMask(item, '+{7}(000)000-00-00'))
    }

    static maskOneKey(){
        this.maskOneKeyElements.forEach((item) => this.startMask(item,  '000 - 000'))
    }

    static maskPhysical(){
        this.maskPhysicalElements.forEach((item) => this.startMask(item,  '000000000000'))
    }

    static maskJurlitsa(){
        this.maskJurlitsaElements.forEach((item) => this.startMask(item,  '0000000000'))
    }

    static maskOrgn(){
        this.maskOrgnElements.forEach((item) => this.startMask(item,  '0000000000000'))
    }

    static maskOrgnip(){
        this.maskOrgnipElements.forEach((item) => this.startMask(item,  '000000000000000'))
    }


    static maskSerialPassport(){
        this.maskSerialPassportElements.forEach((item) => this.startMask(item,  '00 00'))
    }

    static maskBik(){
        this.maskBikElements.forEach((item) => this.startMask(item,  '000000000'))
    }

    static maskCheckingAccount(){
        this.maskCheckingAccountElements.forEach((item) => this.startMask(item,  '00000000000000000000'))
    }

    static startMask(item, mask){
        return IMask(item, { mask: mask })
    }

}

ToolMasks.russianPhoneMask()
ToolMasks.maskOneKey()
ToolMasks.maskPhysical()
ToolMasks.maskJurlitsa()
ToolMasks.maskOrgn()
ToolMasks.maskOrgnip()
ToolMasks.maskSerialPassport()
ToolMasks.maskBik()
ToolMasks.maskCheckingAccount()

// ------------- ************* ---------------------- //
//                  CONSTANTS
// ------------- ************* ---------------------- //

const { inputLink, active } = {
    inputLink: '.input-link',
    active: 'active',
}


// ------------- ************* ---------------------- //
//                  CONSTANTS
// ------------- ************* ---------------------- //





// ------------- ************* ---------------------- //
//           LINK INPUTS FUNCTIONS
// ------------- ************* ---------------------- //

const regLink = new RegExp('https://|http://', 'g');

$(inputLink).forEach((item) => {
    item.addEventListener('input', function (){
        this.value = this.value.replace(regLink, '')
    })
})

// ------------- ************* ---------------------- //
//           LINK INPUTS FUNCTIONS
// ------------- ************* ---------------------- //

//
// const url = "https://cleaner.dadata.ru/api/v1/clean/name";
// const token = "3a57367cba2c76b91aad728bf599c9876a904394";
// const secret = "3b57ed51506a083cbbb422e8e7c16510ca5cb287";
// const query = "Срегей владимерович иванов";
//
// const options = {
//     method: "POST",
//     mode: "cors",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Token " + token,
//         "X-Secret": secret
//     },
//     body: JSON.stringify([query])
// }
//
// fetch(url, options)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log("error", error));



// email

const btnEmail = document.querySelector('.email .email-box .btn-email')
const inputEmail = document.querySelector('.email .email-box .email-input')
const inputKod = document.querySelector('.email .email-box .input-kod')
const passwordEmail = document.querySelector('.email .email-box .email-password')
const footerEmail = document.querySelector('.email .email-box .email-footer')
const emailKod = document.querySelector('.email .email-box .input-kod .email-kod')

emailKod.addEventListener('input', ubdatekod)

function ubdatekod(e){
    if(e.target.value.length === 9){
       setTimeout(()=>{
           inputKod.classList.remove('active')
           passwordEmail.classList.add('active')
       },2000)
    }
}


let a = 655656
console.log(a.length)

inputEmail.addEventListener("input", ubdatefunc)

function  ubdatefunc(e){
    if(e.target.value.length > 0){
        btnEmail.addEventListener('click', ()=>{
            inputKod.classList.add('active')
            footerEmail.style.display = 'none'
        })

    }
}




// email ent