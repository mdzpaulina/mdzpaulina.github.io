async function goToSpotify(){
    try {
        let response = await fetch("https://accounts.spotify.com/api/token", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: '823971d6daa146e2bc2ee752b575eb5f',
                client_secret: '8c884d83547343f794bbd760818dd0e1'
            })
        });

        let data = await response.json();
        if (!data.access_token) {
            console.error("Error obteniendo el token de acceso");
            return;
        }

        const token=data.access_token;
        console.log("Token ")
        const url1='https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X/top-tracks?market=MX'; //URL para acceder a info sobre un artista

        const artistResponse1= await fetch(url1, {method: "GET", headers: {'Authorization' : `Bearer ${token}`}});
        const artistResponseJson1=await artistResponse1.json();
        console.log(artistResponseJson1);
    
        let track = document.createElement("h2");
        console.log(`track: ${artistResponseJson1.tracks[0].name}`)
        track.textContent = artistResponseJson1.tracks[0].name;
        
        let artist = document.createElement("h3");
        console.log(`track: ${artistResponseJson1.tracks[0].artists[0].name}`)
        artist.textContent = artistResponseJson1.tracks[0].artists[0].name;
    
        let image = document.createElement("img");
        image.src = artistResponseJson1.tracks[0].album.images[0].url;
        image.width = 300;
        
        const body = document.getElementById("body");
        body.innerHTML = "";
        document.body.append(track);
        document.body.append(artist);
        document.body.append(image);
        
    } catch (error) {
        console.error("Error en la solicitud", error);
    }
}
goToSpotify();