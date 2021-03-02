$(document).ready(function() {
    $('#form-contact').validate({
        rules:{
            nombre:'required',
            telefono:{
                required:true,
                minlength:8
            },
            email:{
                required:true,
                email:true
            },
            mensaje:'required',
        },
        messages:{
            nombre: "El campo nombre es requerido",
            telefono:{
                required:"El campo teléfono es requerido",
                minlength:"El debe contar con mas de 8 digitos"
            },
            email:{
                required:"El campo email es requerido",
                email:"El campo email de ser un email valido"
            },
            mensaje:'El cuerpo del mensaje es requerido',
        },
        errorElement: "small",
        errorPlacement: function ( error, element ) {
            error.addClass( "invalid-feedback" );
            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.next("label") );
            } else {
                error.insertAfter( element.next("label") );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
        },
        submitHandler: function () {
            //submit();
            let modal= $('#exampleModal');
            modal.modal('show');
        }
    });
    
    $('#form-contact').on('keyup blur', function () {
        if ($('#form-contact').validate().checkForm()) {
            $('#Contact_Send').prop('disabled', false);
        } else {
            $('#Contact_Send').prop('disabled', 'disabled');
        }
    });
});