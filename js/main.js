$(document).ready(function() {
    $('#formDragMenu button').click(function() {
        $('#formSignUp').slideDown();
    })

    $('#telSignUp').mask('(00) 00000-0000')
    $('#cpfSignUp').mask('000.000.000-00')
    $('#birthSignUp').mask('00/00/0000')
    $('#cepSignUp').mask('00000-000')

    $('#formSignUp').validate({
        rules: {
            nameSignUp: {
                required: true
            },
            emailSignUp: {
                required: true,
                email: true
            },
            telSignUp: {
                required: true
            },
            birthSignUp: {
                required: true
            },
            cpfSignUp: {
                required: true
            },
            addressSignUp: {
                required: false
            },
            cepSignUp: {
                required: false
            }
        },
        messages: {
            nameSignUp:'Please, enter your name',
            emailSignUp: 'Please enter a valid email address',
            telSignUp: 'Please enter your phone number',
            birthSignUp:'Please enter your date of birth',
            cpfSignUp: 'Please enter your CPF number'
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element.parent())
        },
        submitHandler: function() {
            alert('Welcome! You have successfully SignedUp to our website.')
            $('.formField input').val('')
            $('#formSignUp').slideToggle();
        },
        invalidHandler: function(e, validate) {
            let invalidFields = validate.numberOfInvalids();
            console.log(invalidFields)
        }
    })

    $('#formDragMenu button').click(function() {
        const destiny = $('#btnReset');

        $('hmtl').animate({
            scrollTop: destiny.offset().top
        }, 1000)
    })
})