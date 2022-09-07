let otpSuccessMessage = document.querySelector('.otp__success-message');
let verifyBtn = document.getElementById('verify__btn');

verifyBtn.addEventListener('click', () => {
    otpSuccessMessage.classList.toggle('active')
    setTimeout(() => {
        otpSuccessMessage.classList.add('d-none');
    }, 2000);
    otpSuccessMessage.classList.remove('d-none');
})