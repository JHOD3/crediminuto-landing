$(function() {
  $(document).scroll(function() {
    if ($(this).scrollTop() > 5) {
      $('#change-color').addClass('bg-blanco');
      $('#logo-m').attr('src','img/logo-m.svg');
      $('#logo-d').attr('src','img/logo-d.svg');
    } else {
      $('nav').removeClass('bg-blanco');
      $('#logo-m').attr('src','img/logo-m.svg');
      $('#logo-d').attr('src','img/logo-d.svg');
    }
  });
  $('#form').validate({
    rules:{
        full_name:'required',
        telefono:'required',
        tienda:'required',
        mensaje:'required'
    },
    messages:{
        full_name: 'Campo requerido',
        telefono: 'Campo requerido',
        tienda: 'Campo requerido',
        mensaje: 'Campo requerido'
    },
    errorElement: "small",
    errorPlacement: function ( error, element ) {
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "select-one" ) {
            error.insertAfter($("label[for='"+element.prop( "id" )+"']"));
        }
        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next('label') );
        }
        else {
            error.insertAfter( element.next('label') );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
  });
  $('#form').on('keyup blur keypress change', function () {
    if ($('#form').validate().checkForm()) {
        $('.send').prop('disabled', false);
    } else {
        $('.send').prop('disabled', 'disabled');
    }
  });
  $('.send').on('click', function(e){
    e.preventDefault();
    $('#centralModalSm').modal('show');
  });  
});