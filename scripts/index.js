

var signupmodal = document.getElementById("signup-modal");

var signinmodal = document.getElementById("signin-modal");

var signupbutton = document.getElementsByClassName("signup")[0];

var signinbutton = document.getElementById("signin");

var span = document.getElementsByClassName("close");

signupbutton.onclick = function() {
    signupmodal.style.display = "block";
    signinmodal.style.display = "none";
}

signinbutton.onclick = function() {
    signinmodal.style.display = "block";
    signupmodal.style.display = "none";
}
  
span[0].onclick = function() {
  signinmodal.style.display = "none";
}

span[1].onclick = function() {
    signupmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == signupmodal || event.target == signinmodal) {
    signupmodal.style.display = "none";
    signinmodal.style.display = "none";
  }
}

function gotoPostlists() {
    window.location.href = "html/postslist.html";
}