const { none, show, active, hidden, opacity25, disabled } = {
    none: "d-none",
    show: 'show',
    active: 'active',
    hidden: 'overflow-hidden',
    opacity25: 'opacity-25',
    disabled: 'disabled'
}





class ToolMasks {
    static numberMaskElements = document.querySelectorAll('.default-phone-input');

    constructor() {
    }


    static russianNumberMask(){
        this.numberMaskElements.forEach((item) => IMask(item, {
            mask: '+{7}(000)000-00-00',
            lazy: false,  // make placeholder always visible
            placeholderChar: '0'     // defaults to '_'
        }))
    }

}

ToolMasks.russianNumberMask()