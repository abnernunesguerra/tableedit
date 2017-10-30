$( document ).ready(function() {
    $('#tblEdit tbody tr td').dblclick(function(){

        if( $('td > input').length > 0 ){
            return;
        }

        var conteudoOriginal = $(this).text();

        var novoElemento = $('<input/>', {text:'text', value:conteudoOriginal});
        $(this).html(novoElemento.bind('blur keydown', function(e){
            var keyCode = e.which;

            if(keyCode == 13) {
                var conteudoNovo = $(this).val();
                    
                if(conteudoNovo != ''){
                    $(this).parent().html(conteudoNovo);
                }
            }

            if( e.type == 'blur'){
                    $(this).parent().html(conteudoOriginal);
            }


        }));

        /**/
        $(this).children().select(); /* para ja mostrar selecionado o dado */
        /*  */

    });

});
