const grid = document.querySelector('#grid')
const choiceColorBlue = document.querySelector('#choice-color-blue')
const choiceColorRed = document.querySelector('#choice-color-red')
const userOne = 0
const userTwo = 0
let i = 1


let oneHundredArray = document.querySelector('#table-100-cases')
let arrayHundred = [[],[],[],[],[],[],[],[],[],[]]
let arrayWinRed = []
let arrayWinBlue  = []
//let varIdCaseRed = this.getAttribut('index_ligne')
//let varIdCaseBlue = this.getAttribut('index_ligne')


//function qui cree un tableau de 10 tableau de 10 case./**
function createArrayOneHundredCases() {
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const caseArrayHundred = document.createElement('div')
            caseArrayHundred.setAttribute('colorChoice', 'white')
            caseArrayHundred.classList.add('caseHundredArray')
            caseArrayHundred.setAttribute('index_ligne', j)
            caseArrayHundred.addEventListener('click', choiceCase)
            caseArrayHundred.style.width = '40px'
            caseArrayHundred.style.height = '33.5px'
            arrayHundred.push(caseArrayHundred)
            grid.appendChild(caseArrayHundred)
        }
    }
    //console.log(arrayHundred)
}

//juste crrer un i compteur pour le nombre de click dans le tablau; les nb pair en blue et impair en rouge; On peut clicker qu'une fois pas couleur


function choiceCase(){
    console.log('create case')
    if (i % 2 == 0){
        const ballUserOne = document.createElement('div')
        //const varIdCaseRed = this.getAttribut('index_ligne')
        ballUserOne.style.width = '20px'
        ballUserOne.style.height = '20px'
        ballUserOne.style.borderRadius = '10px'
        ballUserOne.style.backgroundColor = 'red'
        this.appendChild(ballUserOne)
        //arrayWinRed.push(varIdCaseRed)
    } else {
        const ballUserTwo = document.createElement('div')
        //const varIdCaseBlue = this.getAttribut('index_ligne')
        ballUserTwo.style.width = '20px'
        ballUserTwo.style.height = '20px'
        ballUserTwo.style.borderRadius = '10px'
        ballUserTwo.style.backgroundColor = 'red'
        ballUserTwo.style.backgroundColor = 'blue'
        this.appendChild(ballUserTwo)
        //arrayWinBlue.push(varIdCaseBlue)
    }
    i++
    this.removeEventListener('click', choiceCase)
}


/* si   : 4 ball horizontale
        : 4 ball vertical
        : 4 ball diagonal
        c'est gagné

le gris est une suite de 10 tableau de 10 case.
On peut mettre un id de 0 a 9 pour chaque tableau 

*/
function win() {

}



createArrayOneHundredCases()
//choiceColorFunction()