$(document).ready(function () {
    // Movimiento de formulario
    const movPag = $('.movPag');
    const btn_adelante2 = $('.siguiente');

    const btn_atras1 = $('.atras1');
    const btn_adelante3 = $('.siguiente3');
    const btn_atras2 = $('.atras2');
    const btn_enviar = $('.enviar');

    const texto_progreso = $('.paso p');
    const check_progreso = $('.paso .check');
    const num = $('.paso .num');

    let max = 3;
    let cont = 1;

    btn_adelante2.on("click", function (event) {

        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();

        if (nombre == "" || apellido == "") {
            $('#name-error').text("*");
            $('#apellido-error').text("*");
            $('#aviso-error').text("Los campos con * son obligatorios");
        } else {
            $('#name-error').text("");
            $('#apellido-error').text("");
            $('#aviso-error').text("");
            event.preventDefault();
            movPag.css("margin-left", "-33.3%");
            num.eq(cont - 1).addClass('active');
            check_progreso.eq(cont - 1).addClass('active');
            cont += 1;
        }

    });

    btn_atras1.on("click", function (event) {
        event.preventDefault();
        movPag.css("margin-left", "0%");
        num.eq(cont - 2).removeClass('active');
        check_progreso.eq(cont - 2).removeClass('active');
        cont -= 1;
    });

    btn_adelante3.on("click", function (event) {
        event.preventDefault();
        movPag.css("margin-left", "-66.6%");
        num.eq(cont - 1).addClass('active');
        check_progreso.eq(cont - 1).addClass('active');
        cont += 1;
    });

    btn_atras2.on("click", function (event) {
        event.preventDefault();
        movPag.css("margin-left", "-33.3%");
        num.eq(cont - 2).removeClass('active');
        check_progreso.eq(cont - 2).removeClass('active');
        cont -= 1;
    });

    btn_enviar.on("click", function (event) {
        event.preventDefault();
    });
    // ----------------------------------------------


});