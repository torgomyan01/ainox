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

const { inputLink, active, none, btnLoading, disabled } = {
    inputLink: '.input-link',
    active: 'active',
    none: 'd-none',
    btnLoading: 'btn-loading',
    disabled: 'disabled'
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
//           OPEN CLOSE INPUTS
// ------------- ************* ---------------------- //

const defaultInputs = $('.def-fields .def-fields-input');

defaultInputs.forEach((item) => {
    item.addEventListener('focus', function (){
        checkItems()
        this.parentElement.classList.remove(disabled);
        this.parentElement.classList.add(active);
    })

    item.addEventListener('blur', checkItems)
    checkItems()
})


function checkItems(){
    defaultInputs.forEach((defInputs) => {
        if(defInputs.value === ''){
            defInputs.parentElement.classList.remove(active);
        } else {
            defInputs.parentElement.classList.add(active);
            defInputs.parentElement.classList.add(disabled);
        }
    })
}

// ------------- ************* ---------------------- //
//             EMAIL VALIDATION
// ------------- ************* ---------------------- //

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

