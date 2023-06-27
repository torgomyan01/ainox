const { none, show, active, hidden, opacity25, disabled } = {
    none: "d-none",
    show: 'show',
    active: 'active',
    hidden: 'overflow-hidden',
    opacity25: 'opacity-25',
    disabled: 'disabled'
}





class ToolMasks {
    static numberMaskElements = document.querySelectorAll('.def-fields-input');

    constructor() {
    }


    static russianPhoneMask(){
        this.numberMaskElements.forEach((item) => IMask(item, {
            mask: '+{7}(000)000-00-00',
            lazy: false,
            placeholderChar: '0'
        }))
    }

}

ToolMasks.russianPhoneMask()