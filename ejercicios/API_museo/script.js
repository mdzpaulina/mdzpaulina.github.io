/*let x=10;
console.log(x);
const c=3.28;

let p={"titulo":"Llano en llamas", "autor":"Juan Rulfo"};
console.log(p.autor); 

function triplicar(a){
    return 3*a;
}

console.log(triplicar(x));

const triplicar = (a,b) => {return a*b};
console.log(triplicar(x,4));

let getDoc = document.getElementsByTagName("h2");
console.log(getDoc);
let newFnaf = document.createElement("p");
newFnaf.textContent = "Five Nights at Freddy's. That's where I wanna be";
document.getElementById("fnafBody").appendChild(newFnaf);


let texto = document.createTextNode("Este es un TextNode");
document.getElementById("Body").appendChild(texto);

let parrafo = document.getElementById("Body");
parrafo.style.color = "red";
parrafo.setAttribute("display", "flex");

let pagina = document.getElementsByTagName("body")[0];
pagina.addEventListener("click", function() {
    alert("Jaja menso");
});

let boton1 = document.getElementsByTagName("button")[0];
boton1.addEventListener("click", addImage);

function addImage(){
    let img = document.createElement("img");
    img.src = "https://preview.redd.it/godzilla-est%C3%A1-extra-thicc-v0-5k30shrhyh8c1.jpeg?width=640&crop=smart&auto=webp&s=ba774b6797c2a36a9a323222ecd8dd3321cca232";
    document.body.appendChild(img);
};
*/

let boton =document.getElementsByTagName("button")[0];
boton.addEventListener("click", goToMuseum);

async function goToMuseum(){
    let randomNum = Math.floor(Math.random() * 437133) + 1;
    let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNum}`);
    let data = await response.json();
    console.log(`Obra ID: ${randomNum}`, data)

    let titulo = document.createElement("h2");
    titulo.textContent = data.title ? data.title : "Título desconocido";

    let artista = document.createElement("p");
    artista.textContent = data.artistDisplayName ? `Artista: ${data.artistDisplayName}` : "Artista desconocido";

    let imagen = document.createElement("img");
    imagen.src = data.primaryImage;
    imagen.alt = data.title;
    imagen.width = 300;

    let body = document.getElementById("obra");
    body.innerHTML = "";
    body.appendChild(titulo);
    body.appendChild(artista);
    body.appendChild(imagen);
}

