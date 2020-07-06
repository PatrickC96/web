'use stict';

window.addEventListener('load',()=>{
    var formulario = document.querySelector("#formulario")
    var box_dashed=document.querySelector(".dashed")
    box_dashed.style.display="none"

    formulario.addEventListener('submit',function(){
        console.log("evento capturado")

        var nombre=document.querySelector("#nombre").value
        var apellido=document.querySelector("#apellido").value
        var edad=document.querySelector("#edad").value

        if(nombre.trim()==null || nombre.trim().length==0){
            alert("El nombre no es valido")
            var error_nombre=document.querySelector("#error_nombre")
            error_nombre.innerHTML="El nombre no es valido"
            error_nombre.style.background="red"
            return false
        }else{
            document.querySelector("#error_nombre").style.display="none"
        }

        if(apellido.trim()==null || apellido.trim().length==0){
            alert("El apellido no es valido")
            var error_apellido=document.querySelector("#error_apellido")
            error_apellido.innerHTML="El apellido no es valido"
            error_apellido.style.background="red"
            return false
        }else{
            document.querySelector("#error_apellido").style.display="none"
        }
        if(edad.trim()==null || edad<=0||isNaN(edad)){
            alert("La edad no es valido")
            var error_edad=document.querySelector("#error_edad")
            error_edad.innerHTML="La edad no es valido"
            error_edad.style.background="red"
            return false
        }else{
            document.querySelector("#error_apellido").style.display="none"
        }

        box_dashed.style.display="block"
        console.log(nombre,apellido,edad)

        var p_nombre=document.querySelector("#p_nombre span")
        var p_apellido=document.querySelector("#p_apellido span")
        var p_edad=document.querySelector("#p_edad span")

        p_nombre.innerHTML=nombre
        p_apellido.innerHTML = apellido
        p_edad.innerHTML=edad

    })
})

function print(texto=""){
    //document.write(texto+"<br>")
    console.log(texto)
}

