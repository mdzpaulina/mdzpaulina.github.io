async function obtenerCielo() {
    const apiKey = "GTJjKvFA7ZD6oyeGshaMJMtmDTq7pSE9yvsloZlo"; 
    const fecha = document.getElementById("fechaNacimiento").value;
    if (!fecha) {
        alert("Por favor, ingresa una fecha válida.");
        return;
    }
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${fecha}`;
    
    let respuesta = await fetch(url);
    let data = await respuesta.json();
    console.log(data);
    document.getElementById("resultado").innerHTML = 
        `<h2>${data.title} (${data.date})</h2>
        <img src="${data.url}" alt="Imagen del espacio" width="600">`;
}