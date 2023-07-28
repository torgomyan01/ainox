const $ = (className) => document.querySelectorAll(className);
const $element = (className) => document.querySelector(className);


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
    {
        name: 'close',
        icon: '<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px" clip-path="url(#clip0_812_8629)"> <g id="Group"> <path id="Vector" d="M11.5713 1.2086L0.428467 12.3515" stroke="#6E757C" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M0.428467 1.2086L11.5713 12.3515" stroke="#6E757C" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_812_8629"> <rect width="12" height="12" fill="white" transform="translate(0 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'link',
        icon: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1185_438)"> <path d="M11.5716 6.85728V10.7144C11.5716 10.9418 11.4813 11.1598 11.3205 11.3205C11.1598 11.4813 10.9418 11.5716 10.7144 11.5716H1.28585C1.05853 11.5716 0.840508 11.4813 0.679762 11.3205C0.519017 11.1598 0.428711 10.9418 0.428711 10.7144V1.28585C0.428711 1.05853 0.519017 0.840508 0.679762 0.679762C0.840508 0.519017 1.05853 0.428711 1.28585 0.428711H5.143" stroke="#AEB5BC" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8.57178 0.428711H11.5718V3.42871" stroke="#AEB5BC" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path d="M11.5714 0.428711L6 6.00014" stroke="#AEB5BC" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_1185_438"> <rect width="12" height="12" fill="white"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'all-open',
        icon: '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px" clip-path="url(#clip0_817_9302)"> <g id="Group"> <path id="Vector" d="M11.2142 1.20862H1.78561C1.31222 1.20862 0.928467 1.59237 0.928467 2.06576V11.4943C0.928467 11.9677 1.31222 12.3515 1.78561 12.3515H11.2142C11.6876 12.3515 12.0713 11.9677 12.0713 11.4943V2.06576C12.0713 1.59237 11.6876 1.20862 11.2142 1.20862Z" stroke="#353A3F" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M0.928467 7.63721H3.92847C4.1558 7.63721 4.37381 7.72751 4.53456 7.88826C4.6953 8.049 4.78561 8.26702 4.78561 8.49435C4.78561 8.94901 4.96622 9.38504 5.28771 9.70653C5.6092 10.028 6.04524 10.2086 6.4999 10.2086C6.95455 10.2086 7.39059 10.028 7.71208 9.70653C8.03357 9.38504 8.21418 8.94901 8.21418 8.49435C8.21418 8.26702 8.30449 8.049 8.46523 7.88826C8.62598 7.72751 8.844 7.63721 9.07132 7.63721H12.0713" stroke="#353A3F" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_817_9302"> <rect width="12" height="12" fill="white" transform="translate(0.5 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'notification',
        icon: '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Interface Alert Alarm Bell 2" clip-path="url(#clip0_817_9299)"> <g id="Group"> <path id="Vector" d="M5.64282 12.1372H7.35711" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M9.9285 5.7086C9.9285 4.79929 9.56728 3.92722 8.9243 3.28423C8.28131 2.64125 7.40924 2.28003 6.49993 2.28003C5.59062 2.28003 4.71855 2.64125 4.07556 3.28423C3.43258 3.92722 3.07136 4.79929 3.07136 5.7086V8.7086C3.07136 9.04959 2.9359 9.37662 2.69478 9.61774C2.45366 9.85886 2.12664 9.99432 1.78564 9.99432H11.2142C10.8732 9.99432 10.5462 9.85886 10.3051 9.61774C10.064 9.37662 9.9285 9.04959 9.9285 8.7086V5.7086Z" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M0.928467 5.5972C0.928929 4.78132 1.1235 3.97726 1.4961 3.25143C1.8687 2.52561 2.40864 1.89884 3.07132 1.42291" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M12.0713 5.5972C12.0709 4.78132 11.8763 3.97726 11.5037 3.25143C11.1311 2.52561 10.5911 1.89884 9.92847 1.42291" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_817_9299"> <rect width="12" height="12" fill="white" transform="translate(0.5 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'loading',
        icon: '<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px" clip-path="url(#clip0_817_9296)"> <g id="Group"> <path id="Vector" d="M9 3.78005C9 4.5757 8.68393 5.33876 8.12132 5.90137C7.55871 6.46398 6.79565 6.78005 6 6.78005C5.20435 6.78005 4.44129 6.46398 3.87868 5.90137C3.31607 5.33876 3 4.5757 3 3.78005V1.20862H9V3.78005Z" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M9 9.78003C9 8.98438 8.68393 8.22132 8.12132 7.65871C7.55871 7.0961 6.79565 6.78003 6 6.78003C5.20435 6.78003 4.44129 7.0961 3.87868 7.65871C3.31607 8.22132 3 8.98438 3 9.78003V12.3515H9V9.78003Z" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M1.28564 1.20862H10.7142" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M1.28564 12.3515H10.7142" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_817_9296"> <rect width="12" height="12" fill="white" transform="translate(0 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'view',
        icon: '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px" clip-path="url(#clip0_817_9293)"> <g id="Group"> <path id="Vector" d="M11.84 6.20573C11.9822 6.36323 12.0609 6.56785 12.0609 6.78001C12.0609 6.99217 11.9822 7.1968 11.84 7.3543C10.94 8.32287 8.89147 10.2086 6.50004 10.2086C4.10861 10.2086 2.06004 8.32287 1.16004 7.3543C1.01789 7.1968 0.939209 6.99217 0.939209 6.78001C0.939209 6.56785 1.01789 6.36323 1.16004 6.20573C2.06004 5.23715 4.10861 3.35144 6.50004 3.35144C8.89147 3.35144 10.94 5.23715 11.84 6.20573Z" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M6.49993 8.49431C7.4467 8.49431 8.21422 7.72679 8.21422 6.78002C8.21422 5.83325 7.4467 5.06573 6.49993 5.06573C5.55316 5.06573 4.78564 5.83325 4.78564 6.78002C4.78564 7.72679 5.55316 8.49431 6.49993 8.49431Z" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_817_9293"> <rect width="12" height="12" fill="white" transform="translate(0.5 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'check',
        icon: '<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px"> <path id="Vector" d="M0.428467 8.10858L2.76847 11.1172C2.84743 11.2197 2.9486 11.3031 3.06439 11.361C3.18019 11.4189 3.30759 11.4498 3.43704 11.4514C3.5644 11.4529 3.6905 11.426 3.80615 11.3726C3.9218 11.3192 4.0241 11.2407 4.10561 11.1429L11.5713 2.10858" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>'
    },
]

function startConvertIcons(){
    $('.icon').forEach((item) => {
        item.outerHTML = icons.find((icon) => icon.name === item.dataset.name).icon
    })
}
startConvertIcons()


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
        // this.numberMaskElements.forEach((item) => this.startMask(item, '(000)000-00-00'))
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

const { inputLink, active, none, btnLoading, disabled, show, selected } = {
    inputLink: '.input-link',
    active: 'active',
    none: 'd-none',
    btnLoading: 'btn-loading',
    disabled: 'disabled',
    show: 'show',
    selected: 'selected'
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

    if(item.getAttribute(disabled) !== null){
        item.parentElement.classList.add(`${disabled}-active`)
    }

    item.addEventListener('focus', function (){
        checkItems()
        // this.parentElement.classList.remove(disabled);
        this.parentElement.classList.add(active);

    })

    item.addEventListener('blur', checkItems)
    checkItems()
})

$('.def-fields-icon-edit').forEach((item) => {
    item.addEventListener('click', function (){
        this.parentElement.classList.remove(disabled)
        this.previousElementSibling.removeAttribute(disabled)
    })
})



const defaultInputsTag = $('.def-fields .def-fields-text-body');


defaultInputsTag.forEach((item) => {
    const inputElement = item.parentElement.querySelector('input');

    inputElement.value = item.innerText

    item.addEventListener('input', (e) => {
        const val = e.target.innerText;
        if(val === ''){
            item.parentElement.classList.remove('no-active');
            item.parentElement.classList.remove(active)
        } else {
            inputElement.value = e.target.innerText;
        }
    })

    item.addEventListener('focus', function (){
        this.parentElement.classList.add(active)
    })

    item.addEventListener('blur', checkItemsTag);
    checkItemsTag()
})



$('.def-fields-text-icon-edit').forEach((item) => {
    item.addEventListener('click', function (){
        this.parentElement.classList.remove(disabled);
        this.parentElement.classList.add('no-active');
        this.parentElement.querySelector('.def-fields-text-body').setAttribute('contenteditable', 'true')
    })
})

function checkItemsTag(){
    defaultInputsTag.forEach((defInputs) => {
        if(defInputs.innerHTML === ''){
            defInputs.parentElement.classList.remove(active);
        } else {
            defInputs.parentElement.classList.add(active);
            // defInputs.parentElement.classList.add(disabled);
        }
    })
}


function checkItems(){
    defaultInputs.forEach((defInputs) => {
        if(defInputs.value === ''){
            defInputs.parentElement.classList.remove(active);
        } else {
            defInputs.parentElement.classList.add(active);
            // defInputs.parentElement.classList.add(disabled);
        }
    })
}


// ------------- ************* ---------------------- //
//             OPEN CLOSE NAVBAR PROFILE BAR
// ------------- ************* ---------------------- //

const profileDropdowns = $('.profile-dropdowns');

profileDropdowns.forEach((item) => {
    const backFonMenu = $element('.menu-back-fon');

    if(!backFonMenu){
        document.body.insertAdjacentHTML('beforeend','<div class="menu-back-fon"></div>');
        $element('.menu-back-fon').addEventListener('click', closeOpenedMenu)
    }

    item.addEventListener('click', function (){
        if (this.classList.contains(active)){
            this.classList.remove(active);
            document.body.classList.remove('menu-active');
            $element('.menu-back-fon').classList.remove(active);
        } else {
            profileDropdowns.forEach((dropdown) => dropdown.classList.remove(active));
            this.classList.add(active);
            document.body.classList.add('menu-active');
            $element('.menu-back-fon').classList.add(active);
            $element('.step-page-row-right')?.classList.remove(active);
            $element('.mobile-menu-board')?.classList.remove(active);
        }
    })
})


$('.navbar-item').forEach((item) => {
    item.addEventListener('click', closeOpenedMenu)
})

const filedPhoneCountries = $('.filed-phone-countries');

function closeOpenedMenu(){
    profileDropdowns.forEach((item) => item.classList.contains(active) && item.classList.remove(active) );
    filedPhoneCountries.forEach((item) => item.classList.contains(active) && item.classList.remove(active) );
    $element('.menu-back-fon').classList.remove(active);
    document.body.classList.remove('menu-active');
}

const navbar = $element('.navbar');
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
//             CLOSE ALERT
// ------------- ************* ---------------------- //


$('.alert svg').forEach((alert) => {
    alert.addEventListener('click', function (){
        this.parentElement.classList.add(none)
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
//              DEFAULT SELECT
// ------------- ************* ---------------------- //

$('.def-select select').forEach((select) => {
    let optionItems = '';
    select.parentElement.insertAdjacentHTML('beforeend',
        `
        <div class="def-select-header">
            <span class="def-select-header-title">${select.dataset.title}</span>
            <span class="def-select-header-selected-name"></span>
            <img src="assets/icons/down.svg" alt="down icon">
        </div>
    `)
    select.querySelectorAll('option').forEach((option) => {
        optionItems += `
            <div class="def-select-body-item ${!option.dataset.subtitle ? 'no-subtitle' : ''}" data-value="${option.value}" data-title="${option.innerText}">
              <p class="def-select-body-item-title">${option.innerText}</p>
              ${option.dataset.subtitle ? `<p class="def-select-body-item-subtitle">${option.dataset.subtitle}</p>` : ''}
            </div>
        `;

        if(option.getAttribute('selected') !== null){
            option.parentElement.parentElement.classList.add(selected);
            option.parentElement.parentElement.classList.remove(active);
            option.parentElement.parentElement.querySelector('.def-select-header-selected-name').innerText = option.innerText
            // option.parentElement.parentElement.querySelector('.def-select-header-title').innerText = this.dataset.title;
            option.parentElement.parentElement.querySelectorAll(`select option`).forEach((option) => {
                option.removeAttribute(selected)
            })
            option.parentElement.parentElement.querySelector(`select option[value="${option.value}"]`).setAttribute(selected, 'true')
        }
    })
    select.parentElement.insertAdjacentHTML('beforeend',
        `
        <div class="def-select-body">
            ${optionItems}
        </div>
    `)
})

//
$('.def-select .def-select-header').forEach((select) => {
    select.addEventListener('click', function (){
        this.parentElement.classList.toggle(active)
    })
})

$('.def-select-content').forEach((item) => {
    item.addEventListener('click', function (){
        this.parentElement.classList.remove(active)
    })
})

$('.def-select-body-item').forEach((item) => {
    item.addEventListener('click', function (){
        this.parentElement.parentElement.classList.add(selected);
        this.parentElement.parentElement.classList.remove(active);
        this.parentElement.parentElement.querySelector('.def-select-header-selected-name').innerText = this.dataset.title;
        // option.parentElement.parentElement.querySelector('.def-select-header-title').innerText = this.dataset.title;
        this.parentElement.parentElement.querySelectorAll(`select option`).forEach((option) => {
            option.removeAttribute(selected)
        })
        this.parentElement.parentElement.querySelector(`select option[value="${this.dataset.value}"]`).setAttribute(selected, 'true')
    })
})

$('.def-select select option').forEach((option) => {
    if(option.getAttribute(selected) !== null){
        // option.parentElement.parentElement.classList.add(selected);
        option.parentElement.parentElement.classList.remove(active);
        option.parentElement.parentElement.querySelector('.def-select-header-selected-name').innerText = option.innerText;
        option.parentElement.parentElement.querySelectorAll(`select option`).forEach((option) => {
            option.removeAttribute(selected)
        })
        if(this.dataset?.value){
            option.parentElement.parentElement.querySelector(`select option[value="${this.dataset.value}"]`).setAttribute(selected, 'true')
        }
    }
})


// ------------- ************* ---------------------- //
//              FOR DELETE BTN
// ------------- ************* ---------------------- //

const del_account = $element('.btn-delete-account')
const modal_delete_account = $element('.modal-delete-account')
const closed_modal = $element('.modal-delete-account .modal-form .modal-buttons .close-modal')
const delete_btn = $element('.modal-delete-account .modal-form .modal-buttons .btn-delete')

del_account?.addEventListener('click', ()=>{
    modal_delete_account.classList.add('active')
})

closed_modal?.addEventListener('click', ()=>{
    modal_delete_account.classList.remove('active')
})

delete_btn?.addEventListener('click', ()=>{
    modal_delete_account.classList.remove('active')
})

// ------------- ************* ---------------------- //
//              FOR LOADING FILE BTN
// ------------- ************* ---------------------- //

// function startLoadingBtn(){
//     $('.loading-file-btn').forEach((btn) => {
//
//     })
// }



 $element('.modal-delete-account-body')?.addEventListener('click', ()=>{
     modal_delete_account.classList.remove('active')
 })

$('.field-name-surname').forEach((item) => {

    item.addEventListener('keyup', function (){
        const val = this.value;
        const valArr = val.split(' ');

        if(valArr.length <= 1){
            errorBlockNameAndSurname(true, 'Имя, фамилия, отчество должны быть заполнены')
        } else if(valArr.length < 2){
            errorBlockNameAndSurname(true, 'Фамилия отсутствует')
        } else if(valArr.length < 3){
            errorBlockNameAndSurname(true, 'Отсутствует отчество')
        } else {
            errorBlockNameAndSurname(false, '')
        }

        if(val === ''){
            errorBlockNameAndSurname(false, '')
        }

    })
})

function errorBlockNameAndSurname(status, text){
    $('.error-user-name-surname').forEach((item) => {
        if(status){
            item.classList.remove(none);
            item.innerText = text;
        } else {
            item.classList.add(none);
            item.innerText = '';
        }
    })
}

const data  = {
    "AC": "0000",
    "AD": "000-000",
    "AE": "0-000-0000",
    "AF": "00-000-0000",
    "AG": "000-0000",
    "AI": "000-0000",
    "AL": "(000)000-000",
    "AM": "00-000-000",
    "AN": "000-0000",
    "AO": "(000)000-000",
    "AQ": "100-000",
    "AR": "(000)000-0000",
    "AS": "000-0000",
    "AT": "(000)000-0000",
    "AU": "0-0000-0000",
    "AW": "000-0000",
    "AZ": "00-000-00-00",
    "BA": "00-00000",
    "BB": "000-0000",
    "BD": "00-000-000",
    "BE": "(000)000-000",
    "BF": "00-00-0000",
    "BG": "(000)000-000",
    "BH": "0000-0000",
    "BI": "00-00-0000",
    "BJ": "00-00-0000",
    "BM": "000-0000",
    "BN": "000-0000",
    "BO": "0-000-0000",
    "BR": "(00)0000-0000",
    "BS": "000-0000",
    "BT": "0-000-000",
    "BW": "00-000-000",
    "BY": "(00)000-00-00",
    "BZ": "000-0000",
    "CA": "(000)000-0000",
    "CD": "(000)000-000",
    "CF": "00-00-0000",
    "CG": "00-000-0000",
    "CH": "00-000-0000",
    "CI": "00-000-000",
    "CK": "00-000",
    "CL": "0-0000-0000",
    "CM": "0000-0000",
    "CN": "(000)0000-0000",
    "CO": "(000)000-0000",
    "CR": "0000-0000",
    "CU": "0-000-0000",
    "CV": "(000)00-00",
    "CW": "000-0000",
    "CY": "00-000-000",
    "CZ": "(000)000-000",
    "DE": "(000)000-0000",
    "DJ": "00-00-00-00",
    "DK": "00-00-00-00",
    "DM": "(767)000-0000",
    "DO": "(809)000-0000",
    "DZ": "00-000-0000",
    "EC": "00-000-0000",
    "EG": "(000)000-0000",
    "ER": "0-000-000",
    "ES": "(000)000-000",
    "ET": "00-000-0000",
    "FI": "(000)000-00-00",
    "FJ": "00-00000",
    "FK": "00000",
    "FM": "000-0000",
    "FO": "000-000",
    "FR": "00000-0000",
    "GA": "0-00-00-00",
    "GD": "000-0000",
    "GE": "(000)000-000",
    "GF": "00000-0000",
    "GH": "(000)000-000",
    "GI": "000-00000",
    "GL": "00-00-00",
    "GM": "(000)00-00",
    "GN": "00-000-000",
    "GQ": "00-000-0000",
    "GR": "(000)000-0000",
    "GT": "0-000-0000",
    "GU": "(671)000-0000",
    "GW": "0-000000",
    "GY": "000-0000",
    "HK": "0000-0000",
    "HN": "0000-0000",
    "HR": "00-000-000",
    "HT": "00-00-0000",
    "HU": "(000)000-000",
    "ID": "00-000-00",
    "IE": "(000)000-000",
    "IL": "0-000-0000",
    "IN": "(0000)000-000",
    "IO": "000-0000",
    "IQ": "(000)000-0000",
    "IR": "(000)000-0000",
    "IS": "000-0000",
    "IT": "(000)0000-000",
    "JM": "(876)000-0000",
    "JO": "0-0000-0000",
    "JP": "00-0000-0000",
    "KE": "000-000000",
    "KG": "(000)000-000",
    "KH": "00-000-000",
    "KI": "00-000",
    "KM": "00-00000",
    "KN": "(000)000-0000",
    "KP": "0000-0000",
    "KR": "00-000-0000",
    "KW": "0000-0000",
    "KY": "(000)000-0000",
    "KZ": "(000)000-00-00",
    "LA": "00-000-000",
    "LC": "(000)000-0000",
    "LI": "(000)000-0000",
    "LK": "00-000-0000",
    "LR": "00-000-000",
    "LS": "0-000-0000",
    "LT": "(000)00-000",
    "LU": "(000)000-000",
    "LV": "00-000-000",
    "LY": "00-000-000",
    "MA": "00-0000-000",
    "MC": "(000)000-000",
    "MD": "0000-0000",
    "ME": "00-000-000",
    "MG": "00-00-00000",
    "MH": "000-0000",
    "MK": "00-000-000",
    "ML": "00-00-0000",
    "MM": "00-000-000",
    "MN": "00-00-0000",
    "MO": "0000-0000",
    "MP": "(000)000-0000",
    "MQ": "(000)00-00-00",
    "MR": "00-00-0000",
    "MS": "(000)000-0000",
    "MT": "0000-0000",
    "MU": "000-0000",
    "MV": "000-0000",
    "MW": "000-000",
    "MX": "(000)000-0000",
    "MY": "00-000-0000",
    "MZ": "00-000-000",
    "NA": "00-000-0000",
    "NC": "00-0000",
    "NE": "00-00-0000",
    "NF": "300-000",
    "NG": "(000)000-0000",
    "NI": "0000-0000",
    "NL": "00-000-0000",
    "NO": "(000)00-000",
    "NP": "00-000-000",
    "NR": "000-0000",
    "NU": "0000",
    "NZ": "(000)000-000",
    "OM": "00-000-000",
    "PA": "000-0000",
    "PE": "(000)000-000",
    "PF": "00-00-00",
    "PG": "(000)00-000",
    "PH": "(000)000-0000",
    "PK": "(000)000-0000",
    "PL": "(000)000-000",
    "PS": "00-000-0000",
    "PT": "00-000-0000",
    "PW": "000-0000",
    "PY": "(000)000-000",
    "QA": "0000-0000",
    "RE": "00000-0000",
    "RO": "00-000-0000",
    "RS": "00-000-0000",
    "RU": "(000)000-00-00",
    "RW": "(000)000-000",
    "SA": "0-0000-0000",
    "SB": "00000",
    "SC": "0-000-000",
    "SD": "00-000-0000",
    "SE": "00-000-0000",
    "SG": "0000-0000",
    "SH": "0000",
    "SI": "00-000-000",
    "SK": "(000)000-000",
    "SL": "00-000000",
    "SM": "0000-000000",
    "SN": "00-000-0000",
    "SO": "0-000-000",
    "SR": "000-000",
    "SS": "00-000-0000",
    "ST": "00-00000",
    "SV": "00-00-0000",
    "SX": "000-0000",
    "SY": "00-0000-000",
    "SZ": "00-00-0000",
    "TC": "000-0000",
    "TD": "00-00-00-00",
    "TG": "00-000-000",
    "TH": "00-000-000",
    "TJ": "00-000-0000",
    "TK": "0000",
    "TL": "000-0000",
    "TM": "0-000-0000",
    "TN": "00-000-000",
    "TO": "0000",
    "TR": "(000)000-0000",
    "TT": "(000)000-0000",
    "TW": "0-0000-0000",
    "TZ": "00-000-0000",
    "UA": "(00)000-00-00",
    "UG": "(000)000-000",
    "UK": "00-0000-0000",
    "US": "(000)000-0000",
    "UY": "0-000-00-00",
    "UZ": "00-000-0000",
    "VA": "00000",
    "VC": "(000)000-0000",
    "VE": "(000)000-0000",
    "VG": "(000)000-0000",
    "VI": "(000)000-0000",
    "VN": "(000)0000-000",
    "VU": "00-00000",
    "WF": "00-0000",
    "WS": "00-0000",
    "YE": "00-000-000",
    "ZA": "00-000-0000",
    "ZM": "00-000-0000",
    "ZW": "0-000000"
}
const countryCodeAndName = [
    {
        "name": "Afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "Albania",
        "dial_code": "+355",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "dial_code": "+213",
        "code": "DZ"
    },
    {
        "name": "AmericanSamoa",
        "dial_code": "+1684",
        "code": "AS"
    },
    {
        "name": "Andorra",
        "dial_code": "+376",
        "code": "AD"
    },
    {
        "name": "Angola",
        "dial_code": "+244",
        "code": "AO"
    },
    {
        "name": "Anguilla",
        "dial_code": "+1264",
        "code": "AI"
    },
    {
        "name": "Antarctica",
        "dial_code": "+672",
        "code": "AQ"
    },
    {
        "name": "Antigua and Barbuda",
        "dial_code": "+1268",
        "code": "AG"
    },
    {
        "name": "Argentina",
        "dial_code": "+54",
        "code": "AR"
    },
    {
        "name": "Armenia",
        "dial_code": "+374",
        "code": "AM"
    },
    {
        "name": "Aruba",
        "dial_code": "+297",
        "code": "AW"
    },
    {
        "name": "Australia",
        "dial_code": "+61",
        "code": "AU"
    },
    {
        "name": "Austria",
        "dial_code": "+43",
        "code": "AT"
    },
    {
        "name": "Azerbaijan",
        "dial_code": "+994",
        "code": "AZ"
    },
    {
        "name": "Bahamas",
        "dial_code": "+1242",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "dial_code": "+973",
        "code": "BH"
    },
    {
        "name": "Bangladesh",
        "dial_code": "+880",
        "code": "BD"
    },
    {
        "name": "Barbados",
        "dial_code": "+1246",
        "code": "BB"
    },
    {
        "name": "Belarus",
        "dial_code": "+375",
        "code": "BY"
    },
    {
        "name": "Belgium",
        "dial_code": "+32",
        "code": "BE"
    },
    {
        "name": "Belize",
        "dial_code": "+501",
        "code": "BZ"
    },
    {
        "name": "Benin",
        "dial_code": "+229",
        "code": "BJ"
    },
    {
        "name": "Bermuda",
        "dial_code": "+1441",
        "code": "BM"
    },
    {
        "name": "Bhutan",
        "dial_code": "+975",
        "code": "BT"
    },
    {
        "name": "Bolivia, Plurinational State of",
        "dial_code": "+591",
        "code": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "dial_code": "+387",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "dial_code": "+267",
        "code": "BW"
    },
    {
        "name": "Brazil",
        "dial_code": "+55",
        "code": "BR"
    },
    {
        "name": "Brunei Darussalam",
        "dial_code": "+673",
        "code": "BN"
    },
    {
        "name": "Bulgaria",
        "dial_code": "+359",
        "code": "BG"
    },
    {
        "name": "Burkina Faso",
        "dial_code": "+226",
        "code": "BF"
    },
    {
        "name": "Burundi",
        "dial_code": "+257",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "dial_code": "+855",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "dial_code": "+237",
        "code": "CM"
    },
    {
        "name": "Canada",
        "dial_code": "+1",
        "code": "CA"
    },
    {
        "name": "Cape Verde",
        "dial_code": "+238",
        "code": "CV"
    },
    {
        "name": "Cayman Islands",
        "dial_code": "+ 345",
        "code": "KY"
    },
    {
        "name": "Central African Republic",
        "dial_code": "+236",
        "code": "CF"
    },
    {
        "name": "Chad",
        "dial_code": "+235",
        "code": "TD"
    },
    {
        "name": "Chile",
        "dial_code": "+56",
        "code": "CL"
    },
    {
        "name": "China",
        "dial_code": "+86",
        "code": "CN"
    },
    {
        "name": "Christmas Island",
        "dial_code": "+61",
        "code": "CX"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "dial_code": "+61",
        "code": "CC"
    },
    {
        "name": "Colombia",
        "dial_code": "+57",
        "code": "CO"
    },
    {
        "name": "Comoros",
        "dial_code": "+269",
        "code": "KM"
    },
    {
        "name": "Congo",
        "dial_code": "+242",
        "code": "CG"
    },
    {
        "name": "Congo, The Democratic Republic of the Congo",
        "dial_code": "+243",
        "code": "CD"
    },
    {
        "name": "Cook Islands",
        "dial_code": "+682",
        "code": "CK"
    },
    {
        "name": "Costa Rica",
        "dial_code": "+506",
        "code": "CR"
    },
    {
        "name": "Cote d'Ivoire",
        "dial_code": "+225",
        "code": "CI"
    },
    {
        "name": "Croatia",
        "dial_code": "+385",
        "code": "HR"
    },
    {
        "name": "Cuba",
        "dial_code": "+53",
        "code": "CU"
    },
    {
        "name": "Cyprus",
        "dial_code": "+357",
        "code": "CY"
    },
    {
        "name": "Czech Republic",
        "dial_code": "+420",
        "code": "CZ"
    },
    {
        "name": "Denmark",
        "dial_code": "+45",
        "code": "DK"
    },
    {
        "name": "Djibouti",
        "dial_code": "+253",
        "code": "DJ"
    },
    {
        "name": "Dominica",
        "dial_code": "+1767",
        "code": "DM"
    },
    {
        "name": "Dominican Republic",
        "dial_code": "+1849",
        "code": "DO"
    },
    {
        "name": "Ecuador",
        "dial_code": "+593",
        "code": "EC"
    },
    {
        "name": "Egypt",
        "dial_code": "+20",
        "code": "EG"
    },
    {
        "name": "El Salvador",
        "dial_code": "+503",
        "code": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "dial_code": "+240",
        "code": "GQ"
    },
    {
        "name": "Eritrea",
        "dial_code": "+291",
        "code": "ER"
    },
    {
        "name": "Estonia",
        "dial_code": "+372",
        "code": "EE"
    },
    {
        "name": "Ethiopia",
        "dial_code": "+251",
        "code": "ET"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "dial_code": "+500",
        "code": "FK"
    },
    {
        "name": "Faroe Islands",
        "dial_code": "+298",
        "code": "FO"
    },
    {
        "name": "Fiji",
        "dial_code": "+679",
        "code": "FJ"
    },
    {
        "name": "Finland",
        "dial_code": "+358",
        "code": "FI"
    },
    {
        "name": "France",
        "dial_code": "+33",
        "code": "FR"
    },
    {
        "name": "French Polynesia",
        "dial_code": "+689",
        "code": "PF"
    },
    {
        "name": "Gabon",
        "dial_code": "+241",
        "code": "GA"
    },
    {
        "name": "Gambia",
        "dial_code": "+220",
        "code": "GM"
    },
    {
        "name": "Georgia",
        "dial_code": "+995",
        "code": "GE"
    },
    {
        "name": "Germany",
        "dial_code": "+49",
        "code": "DE"
    },
    {
        "name": "Ghana",
        "dial_code": "+233",
        "code": "GH"
    },
    {
        "name": "Gibraltar",
        "dial_code": "+350",
        "code": "GI"
    },
    {
        "name": "Greece",
        "dial_code": "+30",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "dial_code": "+299",
        "code": "GL"
    },
    {
        "name": "Grenada",
        "dial_code": "+1473",
        "code": "GD"
    },
    {
        "name": "Guam",
        "dial_code": "+1671",
        "code": "GU"
    },
    {
        "name": "Guatemala",
        "dial_code": "+502",
        "code": "GT"
    },
    {
        "name": "Guernsey",
        "dial_code": "+44",
        "code": "GG"
    },
    {
        "name": "Guinea",
        "dial_code": "+224",
        "code": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "dial_code": "+245",
        "code": "GW"
    },
    {
        "name": "Guyana",
        "dial_code": "+595",
        "code": "GY"
    },
    {
        "name": "Haiti",
        "dial_code": "+509",
        "code": "HT"
    },
    {
        "name": "Holy See (Vatican City State)",
        "dial_code": "+379",
        "code": "VA"
    },
    {
        "name": "Honduras",
        "dial_code": "+504",
        "code": "HN"
    },
    {
        "name": "Hong Kong",
        "dial_code": "+852",
        "code": "HK"
    },
    {
        "name": "Hungary",
        "dial_code": "+36",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "dial_code": "+354",
        "code": "IS"
    },
    {
        "name": "India",
        "dial_code": "+91",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "dial_code": "+62",
        "code": "ID"
    },
    {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "dial_code": "+98",
        "code": "IR"
    },
    {
        "name": "Iraq",
        "dial_code": "+964",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "dial_code": "+353",
        "code": "IE"
    },
    {
        "name": "Isle of Man",
        "dial_code": "+44",
        "code": "IM"
    },
    {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "Italy",
        "dial_code": "+39",
        "code": "IT"
    },
    {
        "name": "Jamaica",
        "dial_code": "+1876",
        "code": "JM"
    },
    {
        "name": "Japan",
        "dial_code": "+81",
        "code": "JP"
    },
    {
        "name": "Jersey",
        "dial_code": "+44",
        "code": "JE"
    },
    {
        "name": "Jordan",
        "dial_code": "+962",
        "code": "JO"
    },
    {
        "name": "Kazakhstan",
        "dial_code": "+77",
        "code": "KZ"
    },
    {
        "name": "Kenya",
        "dial_code": "+254",
        "code": "KE"
    },
    {
        "name": "Kiribati",
        "dial_code": "+686",
        "code": "KI"
    },
    {
        "name": "Korea, Democratic People's Republic of Korea",
        "dial_code": "+850",
        "code": "KP"
    },
    {
        "name": "Korea, Republic of South Korea",
        "dial_code": "+82",
        "code": "KR"
    },
    {
        "name": "Kuwait",
        "dial_code": "+965",
        "code": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "dial_code": "+996",
        "code": "KG"
    },
    {
        "name": "Laos",
        "dial_code": "+856",
        "code": "LA"
    },
    {
        "name": "Latvia",
        "dial_code": "+371",
        "code": "LV"
    },
    {
        "name": "Lebanon",
        "dial_code": "+961",
        "code": "LB"
    },
    {
        "name": "Lesotho",
        "dial_code": "+266",
        "code": "LS"
    },
    {
        "name": "Liberia",
        "dial_code": "+231",
        "code": "LR"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "dial_code": "+218",
        "code": "LY"
    },
    {
        "name": "Liechtenstein",
        "dial_code": "+423",
        "code": "LI"
    },
    {
        "name": "Lithuania",
        "dial_code": "+370",
        "code": "LT"
    },
    {
        "name": "Luxembourg",
        "dial_code": "+352",
        "code": "LU"
    },
    {
        "name": "Macao",
        "dial_code": "+853",
        "code": "MO"
    },
    {
        "name": "Macedonia",
        "dial_code": "+389",
        "code": "MK"
    },
    {
        "name": "Madagascar",
        "dial_code": "+261",
        "code": "MG"
    },
    {
        "name": "Malawi",
        "dial_code": "+265",
        "code": "MW"
    },
    {
        "name": "Malaysia",
        "dial_code": "+60",
        "code": "MY"
    },
    {
        "name": "Maldives",
        "dial_code": "+960",
        "code": "MV"
    },
    {
        "name": "Mali",
        "dial_code": "+223",
        "code": "ML"
    },
    {
        "name": "Malta",
        "dial_code": "+356",
        "code": "MT"
    },
    {
        "name": "Marshall Islands",
        "dial_code": "+692",
        "code": "MH"
    },
    {
        "name": "Martinique",
        "dial_code": "+596",
        "code": "MQ"
    },
    {
        "name": "Mauritania",
        "dial_code": "+222",
        "code": "MR"
    },
    {
        "name": "Mauritius",
        "dial_code": "+230",
        "code": "MU"
    },
    {
        "name": "Mayotte",
        "dial_code": "+262",
        "code": "YT"
    },
    {
        "name": "Mexico",
        "dial_code": "+52",
        "code": "MX"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "dial_code": "+691",
        "code": "FM"
    },
    {
        "name": "Moldova",
        "dial_code": "+373",
        "code": "MD"
    },
    {
        "name": "Monaco",
        "dial_code": "+377",
        "code": "MC"
    },
    {
        "name": "Mongolia",
        "dial_code": "+976",
        "code": "MN"
    },
    {
        "name": "Montenegro",
        "dial_code": "+382",
        "code": "ME"
    },
    {
        "name": "Montserrat",
        "dial_code": "+1664",
        "code": "MS"
    },
    {
        "name": "Morocco",
        "dial_code": "+212",
        "code": "MA"
    },
    {
        "name": "Mozambique",
        "dial_code": "+258",
        "code": "MZ"
    },
    {
        "name": "Myanmar",
        "dial_code": "+95",
        "code": "MM"
    },
    {
        "name": "Namibia",
        "dial_code": "+264",
        "code": "NA"
    },
    {
        "name": "Nauru",
        "dial_code": "+674",
        "code": "NR"
    },
    {
        "name": "Nepal",
        "dial_code": "+977",
        "code": "NP"
    },
    {
        "name": "Netherlands",
        "dial_code": "+31",
        "code": "NL"
    },
    {
        "name": "Netherlands Antilles",
        "dial_code": "+599",
        "code": "AN"
    },
    {
        "name": "New Caledonia",
        "dial_code": "+687",
        "code": "NC"
    },
    {
        "name": "New Zealand",
        "dial_code": "+64",
        "code": "NZ"
    },
    {
        "name": "Nicaragua",
        "dial_code": "+505",
        "code": "NI"
    },
    {
        "name": "Niger",
        "dial_code": "+227",
        "code": "NE"
    },
    {
        "name": "Nigeria",
        "dial_code": "+234",
        "code": "NG"
    },
    {
        "name": "Niue",
        "dial_code": "+683",
        "code": "NU"
    },
    {
        "name": "Norfolk Island",
        "dial_code": "+672",
        "code": "NF"
    },
    {
        "name": "Northern Mariana Islands",
        "dial_code": "+1670",
        "code": "MP"
    },
    {
        "name": "Norway",
        "dial_code": "+47",
        "code": "NO"
    },
    {
        "name": "Oman",
        "dial_code": "+968",
        "code": "OM"
    },
    {
        "name": "Pakistan",
        "dial_code": "+92",
        "code": "PK"
    },
    {
        "name": "Palau",
        "dial_code": "+680",
        "code": "PW"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "dial_code": "+970",
        "code": "PS"
    },
    {
        "name": "Panama",
        "dial_code": "+507",
        "code": "PA"
    },
    {
        "name": "Papua New Guinea",
        "dial_code": "+675",
        "code": "PG"
    },
    {
        "name": "Paraguay",
        "dial_code": "+595",
        "code": "PY"
    },
    {
        "name": "Peru",
        "dial_code": "+51",
        "code": "PE"
    },
    {
        "name": "Philippines",
        "dial_code": "+63",
        "code": "PH"
    },
    {
        "name": "Pitcairn",
        "dial_code": "+872",
        "code": "PN"
    },
    {
        "name": "Poland",
        "dial_code": "+48",
        "code": "PL"
    },
    {
        "name": "Portugal",
        "dial_code": "+351",
        "code": "PT"
    },
    {
        "name": "Puerto Rico",
        "dial_code": "+1939",
        "code": "PR"
    },
    {
        "name": "Qatar",
        "dial_code": "+974",
        "code": "QA"
    },
    {
        "name": "Romania",
        "dial_code": "+40",
        "code": "RO"
    },
    {
        "name": "Russia",
        "dial_code": "+7",
        "code": "RU"
    },
    {
        "name": "Rwanda",
        "dial_code": "+250",
        "code": "RW"
    },
    {
        "name": "Reunion",
        "dial_code": "+262",
        "code": "RE"
    },
    {
        "name": "Saint Barthelemy",
        "dial_code": "+590",
        "code": "BL"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dial_code": "+290",
        "code": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "dial_code": "+1869",
        "code": "KN"
    },
    {
        "name": "Saint Lucia",
        "dial_code": "+1758",
        "code": "LC"
    },
    {
        "name": "Saint Martin",
        "dial_code": "+590",
        "code": "MF"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "dial_code": "+1784",
        "code": "VC"
    },
    {
        "name": "Samoa",
        "dial_code": "+685",
        "code": "WS"
    },
    {
        "name": "San Marino",
        "dial_code": "+378",
        "code": "SM"
    },
    {
        "name": "Sao Tome and Principe",
        "dial_code": "+239",
        "code": "ST"
    },
    {
        "name": "Saudi Arabia",
        "dial_code": "+966",
        "code": "SA"
    },
    {
        "name": "Senegal",
        "dial_code": "+221",
        "code": "SN"
    },
    {
        "name": "Serbia",
        "dial_code": "+381",
        "code": "RS"
    },
    {
        "name": "Seychelles",
        "dial_code": "+248",
        "code": "SC"
    },
    {
        "name": "Sierra Leone",
        "dial_code": "+232",
        "code": "SL"
    },
    {
        "name": "Singapore",
        "dial_code": "+65",
        "code": "SG"
    },
    {
        "name": "Slovakia",
        "dial_code": "+421",
        "code": "SK"
    },
    {
        "name": "Slovenia",
        "dial_code": "+386",
        "code": "SI"
    },
    {
        "name": "Solomon Islands",
        "dial_code": "+677",
        "code": "SB"
    },
    {
        "name": "Somalia",
        "dial_code": "+252",
        "code": "SO"
    },
    {
        "name": "South Africa",
        "dial_code": "+27",
        "code": "ZA"
    },
    {
        "name": "South Sudan",
        "dial_code": "+211",
        "code": "SS"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "dial_code": "+500",
        "code": "GS"
    },
    {
        "name": "Spain",
        "dial_code": "+34",
        "code": "ES"
    },
    {
        "name": "Sri Lanka",
        "dial_code": "+94",
        "code": "LK"
    },
    {
        "name": "Sudan",
        "dial_code": "+249",
        "code": "SD"
    },
    {
        "name": "Suriname",
        "dial_code": "+597",
        "code": "SR"
    },
    {
        "name": "Swaziland",
        "dial_code": "+268",
        "code": "SZ"
    },
    {
        "name": "Sweden",
        "dial_code": "+46",
        "code": "SE"
    },
    {
        "name": "Switzerland",
        "dial_code": "+41",
        "code": "CH"
    },
    {
        "name": "Syrian Arab Republic",
        "dial_code": "+963",
        "code": "SY"
    },
    {
        "name": "Taiwan",
        "dial_code": "+886",
        "code": "TW"
    },
    {
        "name": "Tajikistan",
        "dial_code": "+992",
        "code": "TJ"
    },
    {
        "name": "Tanzania, United Republic of Tanzania",
        "dial_code": "+255",
        "code": "TZ"
    },
    {
        "name": "Thailand",
        "dial_code": "+66",
        "code": "TH"
    },
    {
        "name": "Timor-Leste",
        "dial_code": "+670",
        "code": "TL"
    },
    {
        "name": "Togo",
        "dial_code": "+228",
        "code": "TG"
    },
    {
        "name": "Tokelau",
        "dial_code": "+690",
        "code": "TK"
    },
    {
        "name": "Tonga",
        "dial_code": "+676",
        "code": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "dial_code": "+1868",
        "code": "TT"
    },
    {
        "name": "Tunisia",
        "dial_code": "+216",
        "code": "TN"
    },
    {
        "name": "Turkey",
        "dial_code": "+90",
        "code": "TR"
    },
    {
        "name": "Turkmenistan",
        "dial_code": "+993",
        "code": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "dial_code": "+1649",
        "code": "TC"
    },
    {
        "name": "Tuvalu",
        "dial_code": "+688",
        "code": "TV"
    },
    {
        "name": "Uganda",
        "dial_code": "+256",
        "code": "UG"
    },
    {
        "name": "Ukraine",
        "dial_code": "+380",
        "code": "UA"
    },
    {
        "name": "United Arab Emirates",
        "dial_code": "+971",
        "code": "AE"
    },
    {
        "name": "United Kingdom",
        "dial_code": "+44",
        "code": "GB"
    },
    {
        "name": "United States",
        "dial_code": "+1",
        "code": "US"
    },
    {
        "name": "Uruguay",
        "dial_code": "+598",
        "code": "UY"
    },
    {
        "name": "Uzbekistan",
        "dial_code": "+998",
        "code": "UZ"
    },
    {
        "name": "Vanuatu",
        "dial_code": "+678",
        "code": "VU"
    },
    {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "dial_code": "+58",
        "code": "VE"
    },
    {
        "name": "Vietnam",
        "dial_code": "+84",
        "code": "VN"
    },
    {
        "name": "Virgin Islands, British",
        "dial_code": "+1284",
        "code": "VG"
    },
    {
        "name": "Virgin Islands, U.S.",
        "dial_code": "+1340",
        "code": "VI"
    },
    {
        "name": "Wallis and Futuna",
        "dial_code": "+681",
        "code": "WF"
    },
    {
        "name": "Yemen",
        "dial_code": "+967",
        "code": "YE"
    },
    {
        "name": "Zambia",
        "dial_code": "+260",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "dial_code": "+263",
        "code": "ZW"
    }
]

const numberIsoCode = Object.keys(data);
const numberMasks = Object.values(data);



countryCodeAndName.forEach((country) => {
    $('.filed-phone-numbers').forEach((item) => {
        item.insertAdjacentHTML('beforeend', `
        <span class="filed-phone-numbers-item" data-countrycode="${country.code}" data-countrynumber="${country.dial_code}">
            <span class="filed-phone-numbers-countryName">${country.name}</span>
            <span class="filed-phone-numbers-countryCode-flag">
              <span>${country.dial_code}</span>
              <img src="https://www.countryflagicons.com/FLAT/64/${country.code}.png" alt="flag" width="30">
            </span>
        </span>
        `)
        // item.parentElement.parentElement.querySelector('.filed-phone-input').setAttribute('data-code', country.code)
    })
})




filedPhoneCountries.forEach((item) => {
    item.addEventListener('click', function (){
        this.classList.toggle(active);
        $element('.menu-back-fon').classList.toggle(active)
    })
})


const arrayMaks = [];

$('.filed-phone-numbers-item').forEach((item) => {
    item.addEventListener('click', function (){
        const number = this.dataset.countrynumber;
        const countryCode = this.dataset.countrycode;
        const parent = this.parentElement.parentElement.parentElement;
        parent.querySelector('.filed-phone-country-code').innerHTML = number;
        parent.querySelector('.filed-phone-countries-flag').setAttribute('src', `https://www.countryflagicons.com/FLAT/64/${countryCode}.png`);


        const getMask = data[countryCode];

        const input = parent.querySelector('.filed-phone-input');
        const mask = arrayMaks.find((_input) => _input.id === input.id);

        mask.value = '';
        mask.mask.updateOptions({mask: getMask});
    })
})

$('.filed-phone-input').forEach((input) => {
    const inputID = Math.floor(Math.random() * 3000) + '_ainox_input';
    input.id = inputID
    arrayMaks.push({
        id: inputID,
        mask: IMask(input, { mask: '(000)000-00-00' })
    })
})





// document.addEventListener('gesturestart', function (e) {
//     e.preventDefault();
// });