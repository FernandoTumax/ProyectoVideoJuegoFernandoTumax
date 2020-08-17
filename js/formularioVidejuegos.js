'use strict'

$(document).ready(function(){
    
    var acumulador = 3;
    var formulario = $("#formulario");
    
    formulario.hide();

    $("#agregar").click(function(){
        formulario.fadeTo("slow", 0.8);
    });

    $("#guardar").click(function(){
        acumulador = acumulador + 1;
        var listaJuegos = $("#listaJuegos");
        var ordenLista = acumulador;
        var nombreJuego = $("input[name='juego']").val();
        var companiaJuego = $("input[name='compania']").val();
        var seleccionarPlataforma = String($("select[name='plataforma']").val());
        var porcentajeJuego = $("input[name='porcentaje']").val();
        var trofeoJuego = $("input[name='trofeo']").val();
        listaJuegos.append("<tr>" + "<th scope='row'>" + ordenLista + "</th>" + "<td>" + nombreJuego + "</td>" + "<td>" + companiaJuego + "</td>" + "<td>" + seleccionarPlataforma + "</td>" + "<td>" + porcentajeJuego + "%" + "</td>" + "<td>" + trofeoJuego + " Trofeos" + "</td>");
        $("input[name='orden']").val("");
        $("input[name='juego']").val("");
        $("input[name='compania']").val("");
        $("input[name='trofeo']").val("");
        formulario.slideToggle("slow");
    }); 

});



