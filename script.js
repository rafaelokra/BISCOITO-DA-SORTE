const home = document.querySelector(".home");
const luck = document.querySelector(".luck");
const homeImage = document.querySelector("#btnReset");

function openLuck() {
  home.style.display = "none";
  luck.style.display= "block";
  
 
 
}

homeImage.addEventListener("click", openLuck);

const btnBack = document.querySelector("#btnBack");

btnBack.addEventListener("click", function() {
  luck.style.display = "none";
  home.style.display = "block";
  
});
