function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay2").style.display = "";
}

function on2() {
  document.getElementById("overlay2").style.display = "block";
  document.getElementById("overlay").style.display = "";
}

function off() {
  document.getElementById("overlay2").style.display = "";
  document.getElementById("overlay").style.display = "";
}

function login(e) {
  e.preventDefault();
 
 var loginform =    document.getElementById("loginform");
  
  var formData = new FormData(loginform);

  fetch("https://backend.fashion-share-bmsd21a.bbzwinf.ch/api/login", {
    method: "POST",

    body: formData,
  })
    .then(response => {
    if (!response.ok) {
      throw new Error('network returns error');
    }
    return response.json();
  })
    .then((resp) => {
      let respdiv = document.createElement("pre");
      respdiv.innerHTML = JSON.stringify(resp, null, 2);
      loginform.replaceWith(respdiv);
      console.log("resp from server ", resp);
    })
    .catch((error) => {
      // Handle error
      console.log("error ", error);
    });
}

var loginform = document.getElementById("loginform");

loginform.addEventListener("submit", login);




function signUp(e) {
  e.preventDefault();
 
 var signupform =    document.getElementById("signupform");
  
  var formData = new FormData(signupform);

  fetch("https://backend.fashion-share-bmsd21a.bbzwinf.ch/api/users", {
    method: "POST",

    body: formData,
  })
    .then(response => {
    if (!response.ok) {
      throw new Error('network returns error');
    }
    return response.json();
  })
    .then((resp) => {
      let respdiv = document.createElement("pre");
      respdiv.innerHTML = JSON.stringify(resp, null, 2);
      signupform.replaceWith(respdiv);
      console.log("resp from server ", resp);
    })
    .catch((error) => {
      // Handle error
      console.log("error ", error);
    });
}

var signupform = document.getElementById("signupform");

signupform.addEventListener("submit", signUp);
