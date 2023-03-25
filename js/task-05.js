const inputText = document.querySelector('#name-input')
const OutputText = document.querySelector('#name-output')


inputText.addEventListener("input", output)

function output() {
    if (inputText.value=== "") {
        return OutputText.textContent ="Anonymous"
    }
    OutputText.textContent = event.currentTarget.value
}










































