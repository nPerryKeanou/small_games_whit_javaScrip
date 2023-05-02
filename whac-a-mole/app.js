const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timeId = null

function randomSquare() {
    square.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = square[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}


square.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timeId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeleft.textContent = currentTime  

    if (currentTime == 0) {
        clearInterval(countDownTimeId)
        clearInterval(timeId)
        alert('Game Over, yout final score is ' + result)
    }
}

let countDownTimeId = setInterval(countDown, 1000)
 