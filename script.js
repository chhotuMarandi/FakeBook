const password = document.querySelector('.password')
const email = document.querySelector('.email')
const passShow = document.querySelector('.pass-show')
const passHide = document.querySelector('.pass-hide')
const login = document.querySelector('.login')
const error = document.querySelector('.error')
const mailError = document.querySelector('.mail-error')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//show password function

function showPass() {
  if (passHide) {
    passHide.style.display = 'none'
    passShow.style.display = 'block'
    password.type = 'text'
  }
}

//Hide password function

function hidePass() {
  if (passHide) {
    passHide.style.display = 'block'
    passShow.style.display = 'none'
    password.type = 'password'
  }
}

// submit function

function submit() {
  //check if email and pass are filled
  if (!email.value || !password.value === null) {
    error.style.display = 'block'
    setTimeout(() => {
      error.style.display = 'none'
    }, 2000)
  }

  //check email is valid

  if (email.value) {
    if (!emailPattern.test(email.value)) {
      mailError.style.display = 'block'

      setTimeout(() => {
        mailError.style.display = 'none'
      }, 2000)
    }
  }
}

//Event Listener

login.addEventListener('click', submit)

password.addEventListener('input', () => {
  passHide.style.display = 'block'
})

passHide.addEventListener('click', showPass)
passShow.addEventListener('click', hidePass)
