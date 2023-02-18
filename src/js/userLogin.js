export { modalFunctions };
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1p5zFRYitESqi8tfXfMidfyvRPHCvW00',
  authDomain: 'film-library-499b4.firebaseapp.com',
  projectId: 'film-library-499b4',
  storageBucket: 'film-library-499b4.appspot.com',
  messagingSenderId: '70753383955',
  appId: '1:70753383955:web:59d9b4c26be7561d35b1e6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

register = () => {
  let username = document.getElementById('username-register').value;
  let email = document.getElementById('email-register').value;
  let password = document.getElementById('password-register').value;
  if (validateEmail(email) === false || validatePassword(password) === false) {
    alert('Incorrect format of email or password');
    return;
  }
  if (validateFields(username) === false) {
    alert('Incorrect username. Please, try something different.');
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      const user = auth.currentUser;
      const databaseRef = database.ref();
      const userData = {
        email : email,
        username : username,
        lastLogin : Date.now()
      }
      databaseRef.child('users/' + user.uid).set(userData)
      alert('User created!');
    })
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
const validateEmail = (email) => {
  const regex = /^[^@]+@\w+(\.\w+)+\w$/;
  if (regex.test(email) === true) {
    return true;
  } else {
    return false;
  }
};
const validatePassword = (password) => {
  if (password <= 6) {
    return false;
  } else {
    return true;
  }
};
const validateFields = (field) => {
  if (field === null) {
    return false;
  }
  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
};

const registerButton = document.querySelector(".register__modal-btn")
registerButton.addEventListener("click", (register()))
///
const loginOpeningFormBtn = document.querySelector('.login__button');
const closeLoginModal = document.querySelector('.login__close');
const closeRegisterModal = document.querySelector('.register__close');
const modalWindow = document.querySelector('.login__modal');
const registerOpeningFormBtn = document.querySelector('.login__register');
const loginModalWindow = document.querySelector('.login__modal');
const registerModalWindow = document.querySelector('#register-form');
const alreadySignedBtn = document.querySelector('.register__registered');
const login = document.querySelector('.login__form');
const modalFunctions = () => {


  loginOpeningFormBtn.addEventListener('click', (event) => {
    modalWindow.style.display = 'flex';
  });

  registerOpeningFormBtn.addEventListener('click', (event) => {
    loginModalWindow.style.display = 'none';
    registerModalWindow.style.display = 'flex';
    login.style.height = '65%';
  });
  closeLoginModal.addEventListener('click', (event) => {
    event.preventDefault();
    modalWindow.style.display = 'none';
    loginModalWindow.style.display = 'none';
  });
  closeRegisterModal.addEventListener('click', (event) => {
    event.preventDefault();
    modalWindow.style.display = 'none';
    registerModalWindow.style.display = 'none';
  });

  alreadySignedBtn.addEventListener('click', (event) => {
    registerModalWindow.style.display = 'none';
    loginModalWindow.style.display = 'flex';
  });
};

