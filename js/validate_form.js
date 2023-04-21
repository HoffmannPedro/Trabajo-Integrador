$(document).ready(function () {
    function validarFormulario() {
        let validadorFormulario = new FormValidator('registrarDatos', [{
                name: 'nombre',
                display: 'Nombre',
                rules: 'required'
            },
            {
                name: 'apellido',
                display: 'Apellido',
                rules: 'required'
            },
            {
                name: 'telefono',
                display: 'Teléfono',
                rules: 'required|numeric'
            },
            {
                name: 'email',
                display: 'Email',
                rules: 'required|valid_email'
            }
        ], function (errores, evento) {
            if (errores.length) {
                let mensaje = '';
                let nombre = $('#nombre');
                let apellido = $('#apellido');
                let telefono = $('#telefono');
                let email = $('#email');
                let consulta = $('#mensaje');

                errores.forEach(function (campo, indice, arreglo) {
                    mensaje += `${campo.message} <br/>`
                });

                document.querySelector('#aviso-error').innerHTML = mensaje;
            } else {
                evento.preventDefault();
                document.querySelector('#aviso-error').innerHTML = "";
                swal({
                    title: '¡Muchas gracias!',
                    text: 'Ya recibimos tu consulta, en la brevedad nos pondremos en contacto con vos',
                    icon: 'success',
                    button: 'Continuar',
                    closeOnClickOutside: true,
                    timer: 7000
                });
                let form = $('#registrarDatos')[0];
                $(form).trigger("reset");
            }
        });
        console.log('Agarrense de las manos');
    }
    // Agregar evento de click al botón "Siguiente"
    $('.siguiente').on('click', function (event) {
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        if (nombre == "" || apellido == "") {
            event.preventDefault();
            document.querySelector('#aviso-error').innerHTML = "Ambos campos son requeridos para continuar";
        } else {
            document.querySelector('#aviso-error').innerHTML = "";
        }
    });

    $('.siguiente3').on('click', function (event) {
        let telefono = $('#telefono').val();
        let email = $('#email').val();
        if (telefono == "" || email == "") {
            event.preventDefault();
            document.querySelector('#aviso-error').innerHTML = "Ambos campos son requeridos para continuar";
        } else {
            document.querySelector('#aviso-error').innerHTML = "";
        }
    });
});