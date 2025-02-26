document.getElementById("searchButton").addEventListener("click", function() {
 const breed = document.getElementById("breedInput").value.toLowerCase();
 const imageContainer = document.getElementById("imageContainer");

if (breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(Response =>{
        if(!Response.ok){
        throw new Error("Raza de perro no encontrada, pruebe con otra.");
    }
    return Response.json();

})
.then(data => {
    imageContainer.innerHTML = `<img src="${data.message}" alt="Imagen de un ${breed}">`;
})
.catch(error => {
    imageContainer.innerHTML = `<p>${error.message}</p>`;
});

 } else {
    imageContainer.innerHTML = `<p>Por Favor, Ingrese una raza de perro.</p>`;

 }
});