const emailInput = document.querySelector(`#emailInput`)
const sendInput = document.querySelector(`#sendInput`)
const emailValidationErrorContainer = document.querySelector(`#validationErrorContainer`)
async function showInput() {
    emailInput.placeholder = "Your e-mail address";
    emailInput.classList.add("openEmailInputAnimation", "openEmailInput");
    emailInput.classList.remove("closeEmailInputAnimation", "closedEmailInput");
    sendInput.classList.add("transitionInSendInputAnimation", "openSendInput");
    sendInput.classList.remove("closedSendInput");
    emailInput.focus()
}

function hideInput(e) {
    emailValidationErrorContainer.style.display = 'none'
    if (e.relatedTarget !== null) {
        return
    }
    if (e.target.value === "") {
        emailInput.placeholder = "Notify me";
        emailInput.classList.remove("openEmailInputAnimation", "openEmailInput");
        emailInput.classList.add("closeEmailInputAnimation", "closedEmailInput");
        sendInput.classList.remove("transitionInSendInputAnimation", "openSendInput");
        sendInput.classList.add("closedSendInput");
    } else if (!e.target.validity.valid) {
        emailValidationErrorContainer.style.display = 'flex'
    }
}