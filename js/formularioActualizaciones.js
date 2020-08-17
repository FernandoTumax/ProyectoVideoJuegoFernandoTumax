'use strict'

$(document).ready(function () {

    var acumulador = 3;
    var formulario = $("#formulario");

    formulario.hide();

    $("#agregar").click(function () {
        formulario.fadeTo("slow", 0.8);
        $("#agregar").attr("disabled", true);
    });

    $("#guardar").click(function () {
        acumulador = acumulador + 1;
        var ordenLista = acumulador;
        var nombreJuego = $("input[name='juego']").val();
        var versionJuego = $("input[name='version']").val();
        var seleccionPlataforma = String($("select[name='plataforma']").val());
        var seleccionEstado = String($("select[name='estado']").val());
            $("#listaActualizacion").append("<tr>" + "<th scope='row'>" + ordenLista + "</th>" + "<td>" + nombreJuego + "</td>" + "<td>" + "Version " + versionJuego + "</td>" + "<td>" + seleccionPlataforma + "</td>" + "<td>" + seleccionEstado + "</td>");
            $("input[name='juego']").val("");
            $("input[name='version']").val("");
            formulario.slideToggle("slow");
    });
});