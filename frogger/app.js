const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const StartPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const width = 9
const logleft = document.querySelectorAll('log-left')
let currentIndex = 76


function moveFrog(e) {

    squares[currentIndex].classList.remove('frog')

    switch(e.key) {
        case 'ArrowLeft' :
            if (currentIndex % width !== 0) currentIndex -= 1
            break
        case 'ArrowRight' : 
            if (currentIndex % width < width - 1) currentIndex +=1
            break
        case 'ArrowUp' : 
            if (currentIndex - width >= 0) currentIndex -= width
            break
        case 'ArrowDown' :
            if (currentIndex + width < width * width) currentIndex += width
            break
    }

    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)

function autoMoveLogs() {
    logleft.forEach(logleft => moveLogLeft(logleft))
}

function moveLogLeft(logleft) {
    switch(true) {
        case logleft.classList.contains('l1'):
            logleft.classList.remove('l1')
            logleft.classList.add('l2')
            break
        case logleft.classList.contains('l2'):
            logleft.classList.remove('l2')
            logleft.classList.add('l3')
            break
        case logleft.classList.contains('l3'):
            logleft.classList.remove('l3')
            logleft.classList.add('l4')
            break
        case logleft.classList.contains('l4'):
            logleft.classList.remove('l4')
            logleft.classList.add('l5')
            break
         case logleft.classList.contains('l5'):
            logleft.classList.remove('l5')
            logleft.classList.add('l1')
            break
    }
}

setInterval(autoMoveLogs, 1000)