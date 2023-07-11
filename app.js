let num = 0
let userInput = document.getElementById('user-input')
const currentNumber = document.getElementById('current-number')
const subtract = document.getElementById('subtract')
const add = document.getElementById('add')

subtract.addEventListener('click', function() {
    let result = num - parseInt(userInput.innerText)
    currentNumber.innerText = result
})

add.addEventListener('click', function() {
    let result = num + parseInt(userInput.innerText)
    currentNumber.innerText = result
})