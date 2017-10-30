$( document ).ready(function() {
    $('#tblEdit tbody tr td.jx_update').dblclick(function(){

        if( $('td > input').length > 0 ){
            return;
        }

        var conteudoOriginal = $(this).text();

        var novoElemento = $('<input/>', {text:'text', value:conteudoOriginal});
        $(this).html(novoElemento.bind('blur keydown', function(e){
            var keyCode = e.which;
            var conteudoNovo = $(this).val();

            if(keyCode == 13 && conteudoNovo != '' && conteudoNovo != conteudoOriginal) {
           var obj = $(this);
                $.ajax({
                    type: 'POST',
                    url: 'update.php',
                    data: {
                        id: $(this).parents('tr').children().first().text(),
                        campo: $(this).parent().attr('rel'),
                        valor: conteudoNovo
                    },
                    success: function(result){
                        obj.parent().html(conteudoNovo);
                        $('body').append(result);
                    }
                });
                        
            }

            else if( keyCode == 27 || e.type == 'blur'){
                    $(this).parent().html(conteudoOriginal);
            }


        }));

        /**/
        $(this).children().select(); /* para ja mostrar selecionado o dado */
        /*  */

    });

});
