$(document).ready(function(){

    //ajax peticioaes asincronas a un servidor

    //$("#datos").load("www.epn.edu.ec/")
    $.get("https://www.reqres.in/api/users"),{page:2},function(response){
        response.data.array.forEach(element,index => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>")
        });
    }

    $("#formulario").submit(function(e){
        e.preventDefault()//evita la redireccion
        var usuario={
            nombre:$('input[name="name"]').val(),
            web:$('input[name="web"]').val()
        }
        $.ajax({
            type:'POST',
            url:$(this).attr("action"),
            data:usuario,
            beforeSend:function(){
                console.log("Enviando usuario")
            }
            success:function(response){
                console.log(response)
            }
            error:function(){
                console.log("A ocurido un error")
            }
            timeout:1000

        })
    })
})