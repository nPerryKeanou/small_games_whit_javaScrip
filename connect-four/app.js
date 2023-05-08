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
let listeCaseRed = {
    "indexCase" : "",
    "indexLigne" : "",
    "indexColone" : ''
}

let listeCaseBlue = {
    "indexCase" : "",
    "indexLigne" : "",
    "indexColone" : ''
}
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
        const varIdCaseRed = this.getAttribute('compteur')
        const varIdLigneCaseRed = this.getAttribute('index_ligne')
        const varIdColoneCaseRed = this.getAttribute('index_colone')
        listeCaseRed.indexCase = varIdCaseRed
        listeCaseRed.indexLigne = varIdLigneCaseRed
        listeCaseRed.indexColone = varIdColoneCaseRed
        console.log("varIdCaseRed ---> " + varIdCaseRed)
        console.log("varIdLigneCaseRed ---> " + varIdLigneCaseRed)
        console.log("varIdColoneCaseRed ---> " + varIdColoneCaseRed)
        console.log(listeCaseRed)
        this.appendChild(ballUserOne)
        //arrayWinRed.push(varIdCaseRed)
        arrayWinRed.push(ballUserOne)
        
        console.log(arrayWinRed)
        //win()
    } else {
        const ballUserTwo = document.createElement('div')
        ballUserTwo.style.width = '20px'
        ballUserTwo.style.height = '20px'
        ballUserTwo.style.borderRadius = '10px'
        ballUserTwo.style.backgroundColor = 'blue'
        const varIdCaseBlue = this.getAttribute('compteur')
        const varIdLigneCaseBlue = this.getAttribute('index_ligne')
        const varIdColoneCaseBlue = this.getAttribute('index_Colone')
        listeCaseBlue.indexCase = varIdCaseBlue
        listeCaseBlue.indexLigne = varIdLigneCaseBlue
        listeCaseBlue.indexColone = varIdColoneCaseBlue
        console.log("varIdCaseBlue ---> " + varIdCaseBlue)
        console.log("varIdLigneCaseBlue ---> " + varIdLigneCaseBlue)
        console.log("varIdColoneCaseBlue ---> " + varIdColoneCaseBlue)
        console.log(listeCaseBlue)
        this.appendChild(ballUserTwo)
        //arrayWinBlue.push(varIdCaseBlue)
        arrayWinBlue.push(ballUserTwo)
        console.log(arrayWinBlue)
        if (arrayWinBlue.length >= 4){
            win(arrayWinBlue)
        }
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
function win(arrayBall) {
    //verifier les lignes des 4 derniers element du tab
    console.log(arrayBall)
    arrayBall.forEach(element => {
        console.log(element.index_ligne)
    });



    //verifier les 4 colones des 4 derniers élément du tab
}
createArrayOneHundredCases()
//choiceColorFunction()