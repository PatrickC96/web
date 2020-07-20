$(document).ready(function () {
    reloadLink()
    //capturar el boton sss
    $('#add_button').removeAttr('disabled')
    .click(function(){
        $('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>')
        $('#add_link').val('')
        reloadLink()
    })
    function reloadLink(){
        $('a').each(function(index){
            var enlace=$(this).attr("href")
            var thiss = $(this)
            thiss.attr('target','_blank')
            thiss.text(enlace)
        })
    }
})