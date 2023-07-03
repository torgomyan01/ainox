

const buttons = document.querySelectorAll('.history-of-dialogues .buttons button')
const wrapper_button = document.querySelectorAll('.history-of-dialogues .wrapper .buttons-wrapper button')


function  addDisabled (){
buttons.forEach(btn =>{
  btn.classList.add('disabled')
  btn.classList.remove('active')
})
}


buttons.forEach(btn =>{
  btn.addEventListener('click', ()=>{
     addDisabled()
    btn.classList.remove('disabled')
    btn.classList.add('active')
  })
})

//  filter

buttons.forEach(btn =>{
  btn.addEventListener('click', ()=>{
    wrapper_button.forEach(wrapper_btn =>{
      let wrraper = wrapper_btn.parentElement.parentElement
      if(btn.classList[1] === wrapper_btn.classList[1]){
        console.log(true)
        wrraper.classList.add('d-none')
      }
    })
  })
})
