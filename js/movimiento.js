$(document).ready(function () {
    // Movimiento de formulario
    const movPag = $('.movPag');
    const btn_adelante2 = $('.siguiente');

    const btn_atras1 = $('.atras1');
    const btn_adelante3 = $('.siguiente3');
    const btn_atras2 = $('.atras2');
    const btn_enviar = $('.enviar');

    const check_progreso = $('.paso .check');
    const num = $('.paso .num');

    let max = 3;
    let cont = 1;

    btn_adelante2.on("click", function (event) {
        event.preventDefault();
        movPag.css("margin-left", "-33.3%");
        num.eq(cont - 1).addClass('active');
        check_progreso.eq(cont - 1).addClass('active');
        cont += 1;

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

    // ----------------------------------------------

    $("#btnExportarPDF").click(function () {
        // Obtener los valores de los inputs a mostrar en el PDF"
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var telefono = $("#telefono").val();
        var email = $("#email").val();
        var mensaje = $("#mensaje").val();

        // Concatenar el contenido
        var contenidoFinal = `Nombre: ${nombre}</br>Apellido: ${apellido}</br>Telefono: ${telefono}</br>Email: ${email}</br>Consulta: ${mensaje}`;

        // Crear un objeto jsPDF
        var pdf = new jsPDF();

        // Agregar el contenido final al PDF
        pdf.fromHTML(contenidoFinal, 15, 15);

        // Descargar el archivo PDF
        pdf.save("formulario.pdf");
    });

});