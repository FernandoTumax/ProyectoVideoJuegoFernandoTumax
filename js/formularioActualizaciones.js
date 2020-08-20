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
        var nombreJuego = $("#nombreJuego").val();
        var versionJuego = $("#versionJuego").val();
        var seleccionPlataforma = String($("#seleccionPlataforma").val());
        var seleccionEstado = String($("#seleccionEstado").val());
        $("#listaActualizacion").append("<tr>" + "<th scope='row'>" + ordenLista + "</th>" + "<td>" + nombreJuego + "</td>" + "<td>" + "Version " + versionJuego + "</td>" + "<td>" + seleccionPlataforma + "</td>" + "<td>" + seleccionEstado + "</td>");
        $("#nombreJuego").val("");
        $("#versionJuego").val("");
        formulario.slideToggle("slow");

    });

    


});