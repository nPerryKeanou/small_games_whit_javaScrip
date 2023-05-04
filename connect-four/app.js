const grid = document.querySelector('#grid')
const ballUserOne = document.createElement('div')
const ballUserTwo = document.createElement('div')
const choiceColorBlue = document.querySelector('#choice-color-blue')
const choiceColorRed = document.querySelector('#choice-color-red')
let choiceUserOne = 0
let choiceUserTwo = 0

let oneHundredArray = document.querySelector('#table-100-cases')
let arrayHundred = []


//function qui cree un tableau de 100 case. et qui l'afiche en 10 sur 10 et qui rend chaque case eventListener

function createArrayOneHundredCases() {
    for(let i = 0; i < 100; i++) {
        const caseArrayHundred = document.createElement('div')
        caseArrayHundred.setAttribute('colorChoice', 'white')
        caseArrayHundred.classList.add('caseHundredArray')
        caseArrayHundred.addEventListener('click', choiceCase)
        caseArrayHundred.style.width = '40px'
        caseArrayHundred.style.height = '33.5px'
        //arrayHundred.push(caseArrayHundred)
        //grid.appendChild(arrayHundred)
        grid.appendChild(caseArrayHundred)
    }
    console.log(arrayHundred)
}

function choiceCase(){
    console.log('create case')
}

//cree une variable user, qui prend une class 'color' selon le boutton couleur clicke. L'autre user aura directement l'autre couleur

//selon le tour du joueur, la couleur changera. joue1 / joueur 2. peut etre faire un tableau de 2 case, et qui change une fois sur deux.


createArrayOneHundredCases()
