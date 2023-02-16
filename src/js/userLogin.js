export {modalFunctions};
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA1p5zFRYitESqi8tfXfMidfyvRPHCvW00",
  authDomain: "film-library-499b4.firebaseapp.com",
  projectId: "film-library-499b4",
  storageBucket: "film-library-499b4.appspot.com",
  messagingSenderId: "70753383955",
  appId: "1:70753383955:web:59d9b4c26be7561d35b1e6"
};
const app = initializeApp(firebaseConfig);
const loginOpeningFormBtn = document.querySelector(".login__button")
const closeRegisterModal = document.querySelector(".login__close");
const modalWindow = document.querySelector(".login__modal");
const modalFunctions = () => {


  loginOpeningFormBtn.addEventListener("click", (event) => {
    modalWindow.style.display = "flex";
  })

  closeRegisterModal.addEventListener("click", (event) => {
    event.preventDefault();
    modalWindow.style.display = "none";
  })
}