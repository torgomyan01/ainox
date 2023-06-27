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
    static maskPhysicalElements = document.querySelectorAll('.mask-physical');
    static maskJurlitsaElements = document.querySelectorAll('.mask-jurlitsa');
    static maskOrgnElements = document.querySelectorAll('.mask-orgn');
    static maskOrgnipElements = document.querySelectorAll('.mask-orgnip');

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
ToolMasks.maskPhysical()
ToolMasks.maskJurlitsa()
ToolMasks.maskOrgn()
ToolMasks.maskOrgnip()