

const buttons = document.querySelectorAll('.history-of-dialogues .buttons .btn-status')
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
  btn.addEventListener('click', function ()  {
    const tabName = this.dataset.type;
    const getType = tabName === 'all' ? '' : `[data-type="${tabName}"]`;
    $('.wrapper-ticket-message').forEach((item) => item.classList.add(none))
    $(`.wrapper-ticket-message${getType}`).forEach((item) => item.classList.remove(none))

  })
})




window.addEventListener('scroll', ()=>{
  const scrollTop = window.scrollY;
  if(scrollTop > 60){
    $element('.got-a-message').classList.add('d-none')
    $element('.ticket-message .navbar').classList.remove('actives')
  $element('.ticket-message-description').classList.remove('actives')
  }
  else if(scrollTop === 0){
    $element('.got-a-message').classList.remove('d-none')
    $element('.ticket-message .navbar').classList.add('actives')
    $element('.ticket-message-description').classList.add('actives')
  }
})