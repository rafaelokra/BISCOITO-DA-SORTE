const home = document.querySelector(".home");
const luck = document.querySelector(".luck");
const homeImage = document.querySelector("#btnReset");
const btnBack = document.querySelector("#btnBack");

function openLuck() {
  home.style.display = "none";
  luck.style.display= "block";
 
 
}

homeImage.addEventListener("click", openLuck);



btnBack.addEventListener("click", function() {
  luck.style.display = "none";
  home.style.display = "block";
 
  
});
