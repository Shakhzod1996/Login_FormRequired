let form = document.querySelector("form");

form.addEventListener("submit", formSubmit);


function formSubmit(e) {
  e.preventDefault();
  // ?Name input
  let inputName = document.querySelector(".name");
  let nameErr = document.querySelector(".name-err");
  let inputNameValue = inputName.value;
  try {
    if (inputNameValue.match(/[1-9]/)) {
      inputName.classList.add("input-border-red");
      throw "Raqam kiritmang";
    } else if (inputNameValue === "") {
      inputName.classList.add("input-border-red");
      throw "Ismingizni kiriting";
    } else {
      inputName.classList.add("input-border-green");
      inputName.classList.remove("input-border-red");
      nameErr.innerHTML = "";
    }
  } catch (e) {
    nameErr.innerHTML = e;
  }

  //?Surname
  let inputSurname = document.querySelector(".surname");
  let inputSurnameValue = inputSurname.value;
  let surnameErr = document.querySelector(".surname-err");

  try {
    if (inputSurnameValue.match(/[0-9]/)) {
      inputSurname.classList.add("input-border-red");
      throw "Raqam kiritmang";
    } else if (inputSurnameValue == "") {
      inputSurname.classList.add("input-border-red");
      throw "Familiyangizni kiriting";
    } else {
      inputSurname.classList.add("input-border-green");
      inputSurname.classList.remove("input-border-red");
      surnameErr.innerHTML = "";
    }
  } catch (e) {
    surnameErr.innerHTML = e;
  }

  // ?Email
  let inputEmail = document.querySelector(".email");
  let inputEmailValue = inputEmail.value;
  let emailErr = document.querySelector(".email-err");

  try {
    if (inputEmailValue.match(/[@]/)) {
      inputEmail.classList.add("input-border-green");
      inputEmail.classList.remove("input-border-red");
      emailErr.innerHTML = "";
    } else if (inputEmailValue == "") {
      inputEmail.classList.add("input-border-red");
      throw "Emailni kititing";
    } else {
      inputEmail.classList.add("input-border-red");
      throw "Email Xato kiritilgan";
    }
  } catch (e) {
    emailErr.innerHTML = e;
  }

  // ?Password1
  let passwordInput = document.querySelector(".password");
  let passwordInputValue = passwordInput.value;
  let passwordErr = document.querySelector(".password-err");
  let passwordErr1 = document.querySelector(".password-err1");
  let passwordErr2 = document.querySelector(".password-err2");

  try {
    if (
      passwordInputValue.match(/[1-9]/)
    ) {
      passwordInput.classList.remove("input-border-red");
      passwordInput.classList.add("input-border-green");
      passwordErr.innerHTML = "";
    } else if (passwordInputValue == '') {
      passwordInput.classList.add("input-border-red");
      throw 'Parolni kiriting';
    }
    else {
      passwordInput.classList.add("input-border-red");
      throw 'Raqam kiriting';
    }
  } catch (e) {
    passwordErr.innerHTML = e;
  }

  // ?Password2
  let password2 = document.querySelector('.password2')
  let password2Value = password2.value;
  let password2Err = document.querySelector('.password2-err')

  try {
  if (password2Value == '' && passwordInputValue == '') {
      password2.classList.add('input-border-red')
      passwordInput.classList.add('input-border-red')
      throw 'Parolni qayta kiriting'
    } else if (password2Value === passwordInputValue) {
      password2.classList.add('input-border-green')
      passwordInput.classList.add('input-border-green')
      password2.classList.remove('input-border-red')
      passwordInput.classList.remove('input-border-red')
      password2Err.innerHTML = ''
      passwordErr.innerHTML = ''
    }
    else {
      password2.classList.add('input-border-red')
      passwordInput.classList.add('input-border-red')
      throw 'Parollar bir xil emas'
    }
    
  } catch (e) {
    password2Err.innerHTML = e
  }
}
