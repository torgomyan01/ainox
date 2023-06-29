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

const { inputLink, active, none, btnLoading, disabled, show } = {
    inputLink: '.input-link',
    active: 'active',
    none: 'd-none',
    btnLoading: 'btn-loading',
    disabled: 'disabled',
    show: 'show'
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
//             OPEN CLOSE NAVBAR PROFILE BAR
// ------------- ************* ---------------------- //

const profileDropdowns = $('.profile-dropdowns');

profileDropdowns.forEach((item) => {
    item.addEventListener('click', function (){
        profileDropdowns.forEach((dropdown) => dropdown.classList.remove(active))
        this.classList.toggle(active);
    })
})

window.onclick = function(event) {
    const tagName = event.target.tagName.toLowerCase();
    if (
        !event.target.matches('.profile-dropdowns-icon') &&
        tagName !== 'svg' &&
        tagName !== 'path' &&
        !event.target.matches('.profile-dropdowns-toggle-item') &&
        !event.target.matches('.profile-dropdowns-toggle') &&
        !event.target.matches('.profile-dropdowns-toggle-title') &&
        !event.target.matches('.profile-dropdowns-toggle-icon')
    ) {
        const dropdowns = $('.profile-dropdowns');
        dropdowns.forEach((item) => item.classList.contains(active) && item.classList.remove(active) )
    }
}

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function (){
    if(window.scrollY > 10){
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }
})

// OPEN CLOSE MOBILE MENU
$('.mobile-menu-item').forEach((item) => {
    item.addEventListener('click', function (){
        const id = this.dataset.toggle;
        if(id){
            this.classList.toggle(active)
            document.getElementById(id).classList.toggle(show)
        } else{
            console.error('Есть проблема с атрибутом toggle')
        }
    })
})


// ------------- ************* ---------------------- //
//             EMAIL VALIDATION
// ------------- ************* ---------------------- //

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


// ------------- ************* ---------------------- //
//                   ICONS
// ------------- ************* ---------------------- //

const icons = [
    {
        name: 'users',
        icon: '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1161_4195)"> <g id="Group"> <path id="Vector" d="M8.57833 10.7856C10.7086 10.7856 12.4355 9.05867 12.4355 6.92843C12.4355 4.79819 10.7086 3.07129 8.57833 3.07129C6.44809 3.07129 4.72119 4.79819 4.72119 6.92843C4.72119 9.05867 6.44809 10.7856 8.57833 10.7856Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M16.2928 23.6429H0.864258V21.9286C0.864258 19.8827 1.67701 17.9205 3.12372 16.4738C4.57043 15.0271 6.53259 14.2144 8.57854 14.2144C10.6245 14.2144 12.5867 15.0271 14.0334 16.4738C15.4801 17.9205 16.2928 19.8827 16.2928 21.9286V23.6429Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M15.4355 3.07129C16.4585 3.07129 17.4396 3.47767 18.163 4.20102C18.8863 4.92437 19.2927 5.90545 19.2927 6.92843C19.2927 7.95141 18.8863 8.93249 18.163 9.65584C17.4396 10.3792 16.4585 10.7856 15.4355 10.7856" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M18.1787 14.54C19.639 15.0956 20.8962 16.0814 21.7839 17.3671C22.6717 18.6527 23.1481 20.1777 23.1501 21.74V23.6429H20.5787" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4195"> <rect width="24" height="24" fill="white" transform="translate(0.00732422 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'money-cash',
        icon: '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1161_4203)"> <g id="Group"> <path id="Vector" d="M21.4357 1.35693H2.57854C1.63177 1.35693 0.864258 2.12445 0.864258 3.07122V13.3569C0.864258 14.3037 1.63177 15.0712 2.57854 15.0712H21.4357C22.3825 15.0712 23.15 14.3037 23.15 13.3569V3.07122C23.15 2.12445 22.3825 1.35693 21.4357 1.35693Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M12.007 10.7854C13.4271 10.7854 14.5784 9.63417 14.5784 8.21401C14.5784 6.79385 13.4271 5.64258 12.007 5.64258C10.5868 5.64258 9.43555 6.79385 9.43555 8.21401C9.43555 9.63417 10.5868 10.7854 12.007 10.7854Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M2.57861 19.3569H21.4358" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M4.29297 23.6426H19.7215" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4203"> <rect width="24" height="24" fill="white" transform="translate(0.00732422 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'shipping-box',
        icon: '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1161_4212)"> <g id="Group"> <path id="Vector" d="M21.4357 1.35693H2.57854C1.63177 1.35693 0.864258 2.12445 0.864258 3.07122V21.9284C0.864258 22.8751 1.63177 23.6426 2.57854 23.6426H21.4357C22.3825 23.6426 23.15 22.8751 23.15 21.9284V3.07122C23.15 2.12445 22.3825 1.35693 21.4357 1.35693Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M15.4358 1.35693V9.92836C15.4358 10.1557 15.3455 10.3737 15.1847 10.5345C15.024 10.6952 14.8059 10.7855 14.5786 10.7855H9.43576C9.20843 10.7855 8.99041 10.6952 8.82966 10.5345C8.66892 10.3737 8.57861 10.1557 8.57861 9.92836V1.35693" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M14.5786 19.3569H18.8643" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4212"> <rect width="24" height="24" fill="white" transform="translate(0.00732422 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'more-menu',
        icon: '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1161_4220)"> <g id="Group"> <path id="Vector" d="M20.5788 15.0716C21.9989 15.0716 23.1502 13.9203 23.1502 12.5001C23.1502 11.08 21.9989 9.92871 20.5788 9.92871C19.1586 9.92871 18.0073 11.08 18.0073 12.5001C18.0073 13.9203 19.1586 15.0716 20.5788 15.0716Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M12.007 15.0716C13.4271 15.0716 14.5784 13.9203 14.5784 12.5001C14.5784 11.08 13.4271 9.92871 12.007 9.92871C10.5868 9.92871 9.43555 11.08 9.43555 12.5001C9.43555 13.9203 10.5868 15.0716 12.007 15.0716Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M3.43569 15.0716C4.85585 15.0716 6.00711 13.9203 6.00711 12.5001C6.00711 11.08 4.85585 9.92871 3.43569 9.92871C2.01553 9.92871 0.864258 11.08 0.864258 12.5001C0.864258 13.9203 2.01553 15.0716 3.43569 15.0716Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4220"> <rect width="24" height="24" fill="white" transform="translate(0.00732422 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'help',
        icon: '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="&#208;&#152;&#208;&#186;&#208;&#190;&#208;&#189;&#208;&#186;&#208;&#184; &#208;&#180;&#208;&#187;&#209;&#143; &#208;&#188;&#208;&#181;&#208;&#189;&#209;&#142;" clip-path="url(#clip0_1302_9398)"> <g id="Group"> <path id="Vector" d="M21.4282 3.07129L15.5825 8.917" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M2.57129 3.07129L8.417 8.917" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M2.57129 21.9282L8.417 16.0825" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M21.4282 21.9282L15.5825 16.0825" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_5" d="M11.9998 23.6426C18.1538 23.6426 23.1426 18.6538 23.1426 12.4998C23.1426 6.34576 18.1538 1.35693 11.9998 1.35693C5.84576 1.35693 0.856934 6.34576 0.856934 12.4998C0.856934 18.6538 5.84576 23.6426 11.9998 23.6426Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_6" d="M12 17.5572C14.793 17.5572 17.0572 15.293 17.0572 12.5C17.0572 9.70703 14.793 7.44287 12 7.44287C9.20703 7.44287 6.94287 9.70703 6.94287 12.5C6.94287 15.293 9.20703 17.5572 12 17.5572Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1302_9398"> <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'user-profile',
        icon: '<svg id="menu-profile" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="&#208;&#152;&#208;&#186;&#208;&#190;&#208;&#189;&#208;&#186;&#208;&#184; &#208;&#180;&#208;&#187;&#209;&#143; &#208;&#188;&#208;&#181;&#208;&#189;&#209;&#142;" clip-path="url(#clip0_1161_4249)"> <g id="Group"> <path id="Vector" d="M11.9996 14.214C14.3665 14.214 16.2853 12.2952 16.2853 9.92829C16.2853 7.56136 14.3665 5.64258 11.9996 5.64258C9.63265 5.64258 7.71387 7.56136 7.71387 9.92829C7.71387 12.2952 9.63265 14.214 11.9996 14.214Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M4.67969 20.9C5.44467 19.6443 6.51982 18.6066 7.80176 17.8864C9.0837 17.1663 10.5293 16.7881 11.9997 16.7881C13.47 16.7881 14.9157 17.1663 16.1976 17.8864C17.4796 18.6066 18.5547 19.6443 19.3197 20.9" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M11.9998 23.6426C18.1538 23.6426 23.1426 18.6538 23.1426 12.4998C23.1426 6.34576 18.1538 1.35693 11.9998 1.35693C5.84576 1.35693 0.856934 6.34576 0.856934 12.4998C0.856934 18.6538 5.84576 23.6426 11.9998 23.6426Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4249"> <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/> </clipPath> </defs> </svg>'
    },
]

$('.icon').forEach((item) => {
    item.outerHTML = icons.find((icon) => icon.name === item.dataset.name).icon
})
