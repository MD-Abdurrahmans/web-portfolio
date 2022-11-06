let hambar=document.querySelector(".hambar");

let active=document.querySelector(".contact-container");
console.log(active)
hambar.addEventListener("click",function(){

     active.classList.toggle("active");
   
})