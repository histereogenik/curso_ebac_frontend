$(document).ready(function() {
    $('#tel').mask('(00) 000-000-000')
    
    $('form').validate({
        submitHandler: function(form) {
            alert('Registration successful!')
            form.reset();
        }
    })
})