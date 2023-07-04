


window.addEventListener('scroll', ()=>{
  const scrollTop = window.scrollY;
  if(scrollTop > 60){
    $element('.got-a-message').classList.add('active')
    $element('.ticket-message .navbar').classList.remove('actives')
    $element('.ticket-message-description').classList.remove('actives')
  }
  else if(scrollTop === 0){
    $element('.got-a-message').classList.remove('active')
    $element('.ticket-message .navbar').classList.add('actives')
    $element('.ticket-message-description').classList.add('actives')
  }
})