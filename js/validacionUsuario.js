$(document).ready(function(){

    var videojuegos = $("#videojuegos");
    var actualizacion = $("#actualizacion");

    videojuegos.attr("href", "index.html");
    actualizacion.attr("href", "index.html");

    $("#login form").submit(function(){
        var formName = $("#formEmail").val();
        var formPassword = $("#formPassword").val();

        if(formPassword != "jtumax2019013"){
            alert("La contraseña es incorrecta")
        }else{
            localStorage.setItem("formEmail", formName);
        }

        
    });

    var formEmail = localStorage.getItem("formEmail");

    if(formEmail != null && formEmail != "undefined"){
        $("#deslogeado").hide();
        $("#usuario #espacio1").append("<label class='user'>JTumax-2019013</label>");
        $("#usuario #espacio2").append("<label class='user'>" + formEmail + "</label>");
        $("#usuario #espacio3").append("<label class='user'>Josue Fernando Tumax Baquiax</label>");
        $("#logeado").css("display", "block");
        videojuegos.removeAttr("href");
        videojuegos.removeAttr("href");
        videojuegos.attr("href", "videojuegos.html");
        actualizacion.attr("href", "Actualizaciones.html");
        $("#desconectarse").click(function(){
            localStorage.clear();
            location.reload();
            videojuegos.removeAttr("href");
            actualizacion.removeAttr("href");
            videojuegos.attr("href", "index.html");
            actualizacion.attr("href", "index.html");
        })
    }
});