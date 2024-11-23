const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const buttonPopup = document.querySelector(".btnLogin-popup");
const icon = document.querySelector(".icon-close")

registerLink.addEventListener("click", () =>{
    wrapper.classList.add("active");
});

loginLink.addEventListener("click",() =>{
    wrapper.classList.remove("active");
});

buttonPopup.addEventListener("click",() => {
    wrapper.classList.add("popup");
});
icon.addEventListener("click",() => {
    wrapper.classList.remove("popup");
});

 
