$(document).ready(function () {

    var caja = $("#caja")
    function cambiarRojo() {
        $(this).css("background", "red")
    }
    function cambiarVerde() {
        $(this).css("background", "green")
    }

    caja.hover(cambiarRojo, cambiarVerde)

    caja.click(function () {
        $(this).css("background", "pink")
            .css("color", "yellow")
    })

    caja.dblclick(function () {
        $(this).css("background", "blue")
            .css("color", "white")
    })

    //focus y blur
    var nombre = $("#nombre")
    var datos = $("#datos")
    nombre.focus(function () {
        $(this).css("border", "2px solid transparent")
    })
    nombre.blur(function () {
        $(this).css("border", "1px solid #ccc")
        datos.text($(this).val()).show()
    })

    //mausedown - mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "gray")
    })
    datos.mouseup(function(){
        $(this).css("border-color", "red")
    })

    //mousemove
    $(document).mousemove(function(){
        /*console.log("En X:"+event.clientX);
        console.log("En Y:"+event.clientY);*/
        $('body').css("cursor","none");
        $('#sigueme').css("left",event.clientX)
                     .css("top",event.clientY);
    });


})
