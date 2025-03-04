let token = null; //Variable global

function autorizar(){
    const mensaje = "Informacion robada";
    console.log(mensaje);
    let client_id = "823971d6daa146e2bc2ee752b575eb5f";
    const spotifyURL=`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=user-top-read&redirect_uri=http://127.0.0.1:5500/ejercicios/hoy.html`;

    window.location.href=spotifyURL;
}
async function autorizarToken(){
    const urlActual = window.location.search;
    const code=new URLSearchParams(urlActual);
    let code1 = code.get("code"); 
    let response = await fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic '+ btoa(`823971d6daa146e2bc2ee752b575eb5f:8c884d83547343f794bbd760818dd0e1`)
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code:code1,
            redirect_uri:'http://127.0.0.1:5500/ejercicios/hoy.html',

        })
    }); 
    let responseJson = await response.json();
    token = responseJson.access_token;
    console.log(token);
    return token;
}

async function obtenerCancionesS(){
    token = await autorizarToken();
    const url= "https://api.spotify.com/v1/me/top/tracks?time_range=short_term";
    const trackResponse= await fetch(url, {method: "GET", headers: {'Authorization' : `Bearer ${token}`}});
    const trackResponseJson=await trackResponse.json();
    console.log(trackResponseJson);
    
    const topTracks = trackResponseJson.items.slice(0, 5).map(track => track.name);
    const topPopularity = trackResponseJson.items.slice(0, 5).map((track) => track.popularity);
    const topTracksImages = trackResponseJson.items.slice(0, 5).map((track) => track.album.images[0].url);
    console.log(topTracks); 

    let top = 0;

    topTracks.forEach((trackName, index) => {
        top++;
        let trackContainer = document.createElement("div");

        let trackElement = document.createElement("h3");
        trackElement.textContent = `${top}. ${trackName}`;

        let popularityElement = document.createElement("p");
        popularityElement.textContent = `Popularidad: ${topPopularity[index]}`;

        let imageElement = document.createElement("img");
        imageElement.src = topTracksImages[index];
        imageElement.alt = `Portada del álbum de ${trackName}`;
        imageElement.style.width = "120px";
        imageElement.style.height = "120px";
        imageElement.style.borderRadius = "4px";
        imageElement.style.marginRight = "15px";

        trackContainer.appendChild(trackElement);
        trackContainer.appendChild(popularityElement);
        trackContainer.appendChild(imageElement);

        document.body.appendChild(trackContainer);
    });
}
