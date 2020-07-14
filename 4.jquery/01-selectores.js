//verifica cuando toda la pagina web esta cargada

$(document).ready(function () {
//encadenar elementos
    var rojo = $("#rojo").css("background", "red")
    .css("color","white")
    var amarillo = $("#amarillo").css("background", "yellow")
    .css("color","green")
    var verde = $("#verde").css("background", "green")
    .css("color","white")

    //selectores de clase

    var mi_clase = $('.zebra')
    mi_clase.css("padding","15px")

    var mi_clas = $('.sin_borde').click(function(){
        $(this).addClass('zebra')
    })


    // $('p,a').addClass('margen-superior')
    // var busqueda=$('#caja .resultados').eq(0).parent().parent().parent().parent().find('[title="Google"]');
    // console.log(busqueda)
    // var busqueda=$('#elemento2').parent().find('[title="Google"]');
    // console.log(busqueda)


    //copy

    //selccionar etiquetas
    var parrafos=$('p').css("cursor","pointer");//agregar la manito
    parrafos.click(function(){
        var thiss=$(this);
        if(thiss.hasClass('zebra')){
            thiss.addClass('grande');
        }
    });
    
    //seleccionar atributos
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue')
                        .css('color','white');
    
    //seleccionar varias etiquetas
    $('p,a').addClass('margen-superior');
    
    //var busqueda=$('#caja').find(".resaltado");
    //parent me permite saltar de etiquetas
    //var busqueda=$('#caja .resaltado').eq(0).parent().parent().find('[title="Google"]');
    var busqueda=$('#elemento2').parent().parent().find('.resaltado');
    console.log(busqueda);



})