const form = document.getElementById('misterio');
const firstValue = document.getElementById('first-value');
const secondValue = document.getElementById('second-value');

function numberIsBigger(firstValue, secondValue) {
    let result = false;
    result = secondValue > firstValue;
    return result;
}

form.addEventListener('submit', function(e) {
    let isformValid = false;
    const successMessage = 'You made it. Your next instructions have been sent to your e-mail. Hurry.';
    e.preventDefault();


    isformValid = numberIsBigger(firstValue.value, secondValue.value);
    if (isformValid) {
        const containerSuccessMessage = document.querySelector('.success-message');
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = 'block'

        firstValue.value = '';
        secondValue.value = '';
        firstValue.style.border = '';
        document.querySelector('.error-message').style.display = 'none'
    } else {
        firstValue.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block'
    }
})
