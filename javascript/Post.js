async function log() {
    const response = await fetch("https://backend.fashion-share-bmsd21a.bbzwinf.ch/api/posts/1");
    const movies = await response.json();
    console.log(movies);
  }