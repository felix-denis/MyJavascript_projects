const navbar = document.querySelector(".navbar");
const cartItemsContainer = document.querySelector(".cart-items-container");
const searchForm = document.querySelector(".search-form");
const menuBtn = document.querySelector("#menu-btn");
const cartBtn = document.querySelector("#cart-btn");
const searchBtn = document.querySelector("#search-btn");
 
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
});

cartBtn.addEventListener("click", () => {
    cartItemsContainer.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
});
searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");
})

window.onscroll = () => {
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");
}