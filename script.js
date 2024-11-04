const password = document.querySelector('.password')
const passShow = document.querySelector('.pass-show')
const passHide = document.querySelector('.pass-hide')

//show password

function showPass() {
  if (passHide) {
    passHide.style.display = 'none'
    passShow.style.display = 'block'
    password.type = 'text'
  }
}

//Hide password

function hidePass() {
  if (passHide) {
    passHide.style.display = 'block'
    passShow.style.display = 'none'
    password.type = 'password'
  }
}

//Event Listener

password.addEventListener('input', () => {
  passHide.style.display = 'block'
})

passHide.addEventListener('click', showPass)
passShow.addEventListener('click', hidePass)
