const plantas_url = "https://silvinavd.github.io/plantasrepo/plantas.json";
var plantasArray = [];

function showPlantas (array){
    let contenido = "";
    for (let i = 0; i< array.lenght; i++){ 
    let  plantas = array[i];

    contenido += "Nombre: " + plantas.nombre + "<br>";
    contenido += "Precio: " + plantas.precio + "<br>";
    contenido += "Categoria: " + plantas.categoria + "<br>";
    contenido += "Descripción: " + plantas.description + "<br>";

    document.getElementById("lista").innerHTML = contenido
console.log(plantas.description);
}

}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(plantas_url).then (function (resultObj) {
        if (resultObj.status === "ok"){
            plantasArray === resultObj.data;

            showPlantas(plantasArray);
        }
    })
});
