

const btnEmaile = document.querySelector('.btn-emaile');


btnEmaile.addEventListener('click', startValidation)


function startValidation(){
    btnEmaile.classList.add(btnLoading)
    setTimeout(() => btnEmaile.classList.remove(btnLoading), 2000)
  }

