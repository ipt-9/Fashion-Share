function getrequest2() {
  fetch("https://backend.fashion-share-bmsd21a.bbzwinf.ch/api/posts")
    .then((response) => response.json())
    .then((data) => {
      displayData(data); // Die empfangenen Daten anzeigen
    })
    .catch((error) => console.error('Error fetching data:', error));
}

function getrequest() {
  fetch("https://backend.fashion-share-bmsd21a.bbzwinf.ch/api/posts")
    .then(response => response.json())
    .then(data => {
  const first20Posts = data.data.slice(0, 10); // Die ersten 20 Posts extrahieren
      first20Posts.forEach(post => {
        displayData(post); // Für jeden Post displayData aufrufen
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}



function displayData(data) {
  const apiDataContainer = document.getElementById('apiData');
  const innerData = data; // Daten aus dem inneren Objekt extrahieren
  getuser(innerData.id)
    .then((userData) => {
      const userName = userData.name;
      const profilePicture = userData.picture;
      
      const html = `
      <div id="Post">
      <div id="PostHeader">
  
  <img id="ProfilePicture" src="./Media/profilePictures/${profilePicture}" alt="Bild">


      <p id="UserName">${userName}</p>
      </div>
      <div id="divpicture">
  
  <img id="Picture" src="Media/postPictures/images/${innerData.image}" alt="Bild">

      </div>
      


      <div id="PostFooter">
      
      <div id="HeartAnimation" onclick="this.classList.toggle('animate')"></div>


      <p id="Likes">${innerData.likes}</p>
      </div>
      </div>
      `;
      apiDataContainer.innerHTML += html;
  })
}

function getuser(id) {
  return fetch(`https://backend.fashion-share-bmsd21a.bbzwinf.ch/api/users/${id}`)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => console.error('Error fetching user data:', error));
}


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
  
  function signUp(e) {
    e.preventDefault();
   
   var signupform =    document.getElementById("signupform");
    
    var formData = new FormData(signupform);
  
    fetch("https://backend.fashion-share-bmsd21a.bbzwinf.ch/api/users", {
      method: "POST",
      headers: {
          "Accept": "application/json"
        },
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
  

  window.onload = function(){
      getrequest();
  }