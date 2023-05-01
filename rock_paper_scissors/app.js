/*
            DOCUMENTATION :::

-------------- forEach --------------

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputetChoice()
    getResult()
}))
 
- La methode forEach() permet de d'executer une fonction sur chaque element d'un tableau.
    :   const array_1 = ['a','b','c']
        array_1.forEach(element => console.log(element))

        a
        b
        c

- la propriete TARGET est l'objet HTMLElement sur lequel l'évenement s'est produit
  la propriété TARGET est tres utiles pour trouver l'objet qui est à l'origin de l'événement


------------------------------------------

*/


const computerChoiceDisplay = document.getElementById('computer_choice')
const userChoiceDisplay = document.getElementById('user_choice')
const reslutDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')

let userChoice
let computerChoice


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputetChoice()
    getResult()
}))

function generateComputetChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you case use possibleChoice.lenght
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win'
    }
    reslutDisplay.innerHTML = result
}