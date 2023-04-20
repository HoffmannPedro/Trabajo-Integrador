window.addEventListener('load', () => {
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
            swal({
                title: '¡Muchas gracias!',
                text: 'Ya recibimos tu consulta, en la brevedad nos pondremos en contacto con vos',
                icon: 'success',
                button: 'Continuar',
                closeOnClickOutside: true,
                timer: 7000
            });
        }
    })
});