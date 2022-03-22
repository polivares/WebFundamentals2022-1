$(document).ready(function(){
    // Esta línea esta seleccionando la etiqueta body
    $("body").text("Hola mundo!"); // Cambiamos todo el contenido de body

    // Agregamos los párrafos
    for (var i = 0; i < 10; i++) 
        $("body").append($("<p></p>").text("This has gone through the loop completely: " + i + " times"))
    
    // Eventos de click: cambiar fondo
    $("p").click(function(){
        if($(this).css("background-color") == "rgb(0, 0, 255)"){
            $(this).css("background-color","yellow");
        }else {
            $(this).css("background-color","blue");
        }
    })
});

$(".nav-bar")

