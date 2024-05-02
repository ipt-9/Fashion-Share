function getrequest() {
  fetch("https://backend.fashion-share-bmsd21a.bbzwinf.ch/api/posts/81")
    .then((response) => response.json())
    .then((data) => {
      displayData(data); // Die empfangenen Daten anzeigen
    })
    .catch((error) => console.error('Error fetching data:', error));
}

function displayData(data) {
  const apiDataContainer = document.getElementById('apiData');
  const innerData = data.data; // Daten aus dem inneren Objekt extrahieren
  const html = `
    <div>
      <h2>ID: ${innerData.id}</h2>
      <p>User ID: ${innerData.user_id}</p>
      <p>Description: ${innerData.description}</p>
      <p>Likes: ${innerData.likes}</p>
	  <img src="../Media/postPictures/images/${innerData.image}" alt="Bild">
      <p>Erstellt am: ${innerData.created_at}</p>
      <p>Aktualisiert am: ${innerData.updated_at}</p>
    </div>
  `;
  apiDataContainer.innerHTML = html;
}

