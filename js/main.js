const password=document.getElementById("password");
const eyeIcon=document.getElementById("eyeIcon");
let img=document.querySelector("img");

eyeIcon.addEventListener('click',()=>{
  password.type==="password" ? password.type="text":password.type="password";
  password.type==="password" ? img.src="images/eye-close.png" : img.src="images/eye-open.png";
})