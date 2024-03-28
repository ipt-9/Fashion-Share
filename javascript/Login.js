function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function on2() {
    document.getElementById("overlay2").style.display = "block";
  }

const loginPopup = document.getElementById('loginPopup');
const loginButton = document.getElementById('loginButton');
const closeButton = document.getElementById('closeButton');

const signupPopup = document.getElementById('signupPopup');
const signupButton = document.getElementById('signupButton');


loginButton.addEventListener('click', function() {
  loginPopup.style.display = 'block';
});

signupButton.addEventListener('click', function() {
    signupPopup.style.display = 'block';
  });

closeButton.addEventListener('click', function() {
  loginPopup.style.display = 'none';
});
