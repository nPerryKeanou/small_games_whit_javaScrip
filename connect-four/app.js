const grid = document.querySelector('#grid')
const choiceColorBlue = document.querySelector('#choice-color-blue')
const choiceColorRed = document.querySelector('#choice-color-red')
const userOne = 0
const userTwo = 0
let i = 1
let cmpt = 0


let oneHundredArray = document.querySelector('#table-100-cases')
let arrayHundred = [[],[],[],[],[],[],[],[],[],[]]
let arrayWinRed = []
let arrayWinBlue  = []
let arrayWin = []
//let varIdCaseRed = this.getAttribut('index_ligne')
//let varIdCaseBlue = this.getAttribut('index_ligne')


//function qui cree un tableau de 10 tableau de 10 case./**
function createArrayOneHundredCases() {
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            cmpt++
            const caseArrayHundred = document.createElement('div')
            caseArrayHundred.setAttribute('colorChoice', 'white')
            caseArrayHundred.classList.add('caseHundredArray')
            caseArrayHundred.setAttribute('index_colone', j)
            caseArrayHundred.setAttribute('index_ligne', i)
            caseArrayHundred.setAttribute('compteur', cmpt)
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
        ballUserOne.style.width = '20px'
        ballUserOne.style.height = '20px'
        ballUserOne.style.borderRadius = '10px'
        ballUserOne.style.backgroundColor = 'red'
        const varIdCaseRed = this.getAttribute('index_ligne')
        console.log(varIdCaseRed)
        this.appendChild(ballUserOne)
        arrayWinRed.push(varIdCaseRed)
        console.log(arrayWinRed)
        //winRed()
    } else {
        const ballUserTwo = document.createElement('div')
        ballUserTwo.style.width = '20px'
        ballUserTwo.style.height = '20px'
        ballUserTwo.style.borderRadius = '10px'
        ballUserTwo.style.backgroundColor = 'blue'
        const varIdCaseBlue = this.getAttribute('index_ligne')
        this.appendChild(ballUserTwo)
        arrayWinBlue.push(varIdCaseBlue)
        console.log(arrayWinBlue)
        //winBlue()
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
- Donc si dans le tableau de valeur, on retrouve 4 fois d'afillé le meme chiffre, c'est gagné.
- Si on retrouve une suite de chiffre qui se suit, c'est gagné



*/
function winBlue() {
    let jj = 1
    if (arrayWinBlue.length >= 4){
        for (let ii = 4; ii > 0; ii--){
            arrayWin.push(arrayWinBlue[arrayWinBlue.length-jj])
            jj++
        }
        console.log(arrayWin)
    }
    jj = 1
    arrayWinBlue.forEach(e => arrayWinBlue.pop(e))
    console.log(arrayWinBlue)
}



createArrayOneHundredCases()
//choiceColorFunction()