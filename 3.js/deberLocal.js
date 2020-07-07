//Utilizando localstorage generar la lógica para almacenar, listar y borrar una pelicula.\

'use stric'


if (typeof (Storage) != 'undefined') {
    console.log("local storage disponible")
} else {
    console.log("Inconpatible con local storage")
}

function agregarPelicula(nombre, anio, pais) {
    var pelicula = {
        year: anio,
        pais: pais
    }
    localStorage.setItem(nombre, JSON.stringify(pelicula))
}

function mostrarRegistos() {
var texto=""
    for (let i = 0; i < localStorage.length-1; i++) {
        let key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}` + "\n")
        var peli =  localStorage.getItem(key) 
        texto += key +": "+ peli+"<br>"        
    }
    console.log(texto)
    document.querySelector("#tabla").innerHTML= texto
}

window.addEventListener('load', () => {
    var formulario = document.querySelector("#formulario")

    formulario.addEventListener('submit', function () {

        var nombre = document.querySelector("#nombre").value
        var anio = document.querySelector("#anio").value
        var pais = document.querySelector("#pais").value

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("El nombre no es valido")
            var error_nombre = document.querySelector("#error_nombre")
            error_nombre.innerHTML = "El nombre no es valido"
            error_nombre.style.background = "red"
            return false
        } else {
            document.querySelector("#error_nombre").style.display = "none"
        }

        if (anio.trim() == null || anio.trim().length == 0) {
            alert("El anio no es valido")
            var error_anio = document.querySelector("#error_anio")
            error_anio.innerHTML = "El apellido no es valido"
            error_anio.style.background = "red"
            return false
        } else {
            document.querySelector("#error_anio").style.display = "none"
        }
        if (pais.trim() == null || pais.trim().length == 0) {
            alert("El pais no es valido")
            var error_pais = document.querySelector("#error_pais")
            error_pais.innerHTML = "El pais no es valido"
            error_pais.style.background = "red"
            return false
        } else {
            document.querySelector("#error_pais").style.display = "none"
        }
        agregarPelicula(nombre, anio, pais)
        console.log("Pelicula guardar")
        mostrarRegistos()
        nombre.setItem=""
        anio.innerHTML=""
        pais.innerHTML=""
    })

    var elimina_peli = document.querySelector("#elimina")

    elimina_peli.addEventListener('submit', function () {

        var nombreE = document.querySelector("#nombreE").value

        if (nombreE.trim() == null || nombreE.trim().length == 0) {
            alert("El nombre no es valido")
            var error_nombreE = document.querySelector("#error_nombreE")
            error_nombreE.innerHTML = "El nombre no es valido"
            error_nombreE.style.background = "red"
            return false
        } else {
            document.querySelector("#error_nombre").style.display = "none"
        }
        localStorage.removeItem(nombreE)
        console.log("Pelicula Eliminada")
        mostrarRegistos()
        nombreE.innerHTML=""
    })
})

