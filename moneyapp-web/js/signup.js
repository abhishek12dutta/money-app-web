$( document ).ready( function () {

 //var input = document.querySelector("#phone");
 //window.intlTelInput(input);

 // $("#phone").intlTelInput();

    $( "#signupForm" ).validate( {
        rules: {
            name: "required",
            username: {
                required: true,
                minlength: 6,
                maxlength:10,
                remote:{
                    url: 'http://localhost:8080/api/user/checkUsernameAvailability',
                    type:'GET',
                    data: {
                      username: function()
                      {
                          return $('#signupForm :input[name="username"]').val();
                      }
                  }
              }
          },
          password: {
            required: true,
            minlength: 5
        },
        confirm_password: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        email: {
            required: true,
                remote:{
                    url: 'http://localhost:8080/api/user/checkEmailAvailability',
                    type:'GET',
                    data: {
                      email: function()
                      {
                          return $('#signupForm :input[name="email"]').val();
                      }
                  }
              }
        },
        addressline1: {
            required: true,
            maxlength: 40
        },
        country: {
            required: true
        },
        pincode: {
            required: true,
            minlength: 6,
            maxlength:6
        },
        phone: {
            required: true,
            minlength: 10,
            maxlength:10
        },
        agree: "required"
    },
    messages: {
        name: "Please enter your firstname",
        username: {
            required: "Please enter a username",
            minlength: "Your username must consist of at least 2 characters",
            remote: "This username is not available"
        },
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        },
        confirm_password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: "Please enter the same password as above"
        },
        email: {
            required: "Please enter a valid email address",
            remote: "This email is already in use"
        },
        agree: "Please accept our policy"
    },
    errorElement: "em",
    errorPlacement: function ( error, element ) {
                    // Add the `help-block` class to the error element
                    error.addClass( "help-block" );

                    // Add `has-feedback` class to the parent div.form-group
                    // in order to add icons to inputs
                    element.parents( ".col-sm-5" ).addClass( "has-feedback" );

                    if ( element.prop( "type" ) === "checkbox" ) {
                        error.insertAfter( element.parent( "label" ) );
                    } else {
                        error.insertAfter( element );
                    }

                    // Add the span element, if doesn't exists, and apply the icon classes to it.
                    if ( !element.next( "span" )[ 0 ] ) {
                        $( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
                    }
                },
                success: function ( label, element ) {
                    // Add the span element, if doesn't exists, and apply the icon classes to it.
                    if ( !$( element ).next( "span" )[ 0 ] ) {
                        $( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
                    }
                },
                highlight: function ( element, errorClass, validClass ) {
                    if (element.name==="phone"){
                        $(".iti__selected-flag").css("padding", "0 6px 33px 8px");
                    }

                    $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
                    $( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
                },
                unhighlight: function ( element, errorClass, validClass ) {
                    $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
                    $( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
                    if (element.name==="phone"){
                        $(".iti__selected-flag").css("padding", "0 6px 9px 8px");
                    }
                }
            } );




} );
