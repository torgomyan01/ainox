const { none, show, active, hidden, opacity25, disabled } = {
    none: "d-none",
    show: 'show',
    active: 'active',
    hidden: 'overflow-hidden',
    opacity25: 'opacity-25',
    disabled: 'disabled'
}





class ToolMasks {
    static numberMaskElements = document.querySelectorAll('.mask-phone');
    static maskOneKeyElements = document.querySelectorAll('.mask-one-key');

    constructor() {
    }


    static russianPhoneMask(){
        this.numberMaskElements.forEach((item) => this.startMask(item, '+{7}(000)000-00-00'))
    }

    static maskOneKey(){
        this.maskOneKeyElements.forEach((item) => this.startMask(item,  '000 - 000'))

    }

    static startMask(item, mask){
        return IMask(item, {
            mask: mask,
            lazy: false,
            placeholderChar: '0'
        })
    }

}

ToolMasks.russianPhoneMask()
ToolMasks.maskOneKey()