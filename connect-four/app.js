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


let arrayOfListBlue = []
let arrayOfListRed = []


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


// let arrayBlueIndexCase = []
// let arrayBlueIndexLigne = []
// let arrayBlueIndexColone = []
// let arrayRedIndexCase = []
// let arrayRedIndexLigne = []
// let arrayRedIndexColone = []



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
        console.log("RRRRREEEEEDDD")
        const ballUserOne = document.createElement('div')
        ballUserOne.style.width = '20px'
        ballUserOne.style.height = '20px'
        ballUserOne.style.borderRadius = '10px'
        ballUserOne.style.backgroundColor = 'red'
        const varIdCaseRed = this.getAttribute('compteur')
        const varIdLigneCaseRed = this.getAttribute('index_ligne')
        const varIdColoneCaseRed = this.getAttribute('index_colone')
        let newObjectRed = new Object()
        newObjectRed.indexCase = varIdCaseRed
        newObjectRed.indexLigne = varIdLigneCaseRed
        newObjectRed.indexColone = varIdColoneCaseRed
        arrayOfListRed.push(newObjectRed)
        console.log(arrayOfListRed)
        this.appendChild(ballUserOne)
        // arrayWinRed.push(ballUserOne)
        // if (arrayOfListRed.length >= 4){
        //     winRed(arrayOfListRed)   
        // }
    } else {
        console.log("BLLLLLLUUUUUUUEEEEEE")
        const ballUserTwo = document.createElement('div')
        ballUserTwo.style.width = '20px'
        ballUserTwo.style.height = '20px'
        ballUserTwo.style.borderRadius = '10px'
        ballUserTwo.style.backgroundColor = 'blue'
        const varIdCaseBlue = this.getAttribute('compteur')
        const varIdLigneCaseBlue = this.getAttribute('index_ligne')
        const varIdColoneCaseBlue = this.getAttribute('index_Colone')
        let newObjectBlue = new Object()
        newObjectBlue.indexCase = varIdCaseBlue
        newObjectBlue.indexLigne = varIdLigneCaseBlue
        newObjectBlue.indexColone = varIdColoneCaseBlue
        arrayOfListBlue.push(newObjectBlue)
        console.log(arrayOfListBlue)
        this.appendChild(ballUserTwo)
        console.log('-----------------------------------------')
        if (arrayOfListBlue.length >= 4){
            winBlue(arrayOfListBlue)   
            console.log(arrayOfListBlue)
        }
        console.log('-----------------------------------------')
    }
    i++
    this.removeEventListener('click', choiceCase)
}

function winBlue(listCase) {
    //recuperer les valeurs lignes des 4 dernieres listes dans un tab ac obj.keys .
    //recuperer les valeurs des colones des 4 derniers listes dans un tab ac obj.keys 

    //si les nb dans le tabListLigne sont toute egale, c'est hoizontale. donc boole = 1
        //comme boole = 1, on doit verifier les colone pour voir si les boulles sont colles. pour ca, il faut trier le tabListCol en orde croissant.
        //Si c'est dans l'ordre croissant par 1. C'est une ligne de 4 complet et c'est gagané. otherBoole = 1
    //sinon si les nb des colone sont tous egaux, c'est vertical. donc boole = 1
        //il faut verifier alors les lignes pour voir si elles sont dans l'ordre croissant par 1.
        //si oui c'est gagne.
    //sinon si il faut trier les deux tab par odre croissant par et si c'est ok, c'est verticale
    
    
    let tabObjetLigne = [] // ce tab va recuperer tout les indexLigne des objet
    listCase.forEach(element => {
        tabObjetLigne.push(element.indexLigne)
    });
    let arrayLigneSlice = tabObjetLigne.slice(-4)// creer un ne tab avec les 4 derniere ligne 
    
    let tabObjetColone = [] // ce tab va recuperer tout les indexLigne des objet
    listCase.forEach(element => {
        tabObjetColone.push(element.indexColone)
    });
    let arrayColoneSlice = tabObjetColone.slice(-4)// creer un tab ac les 4 derniers colones
    
    let booleligne = 1
    let booleCol  = 1

    if (fnCheckLigne(tabObjetLigne) == 1)
    {

    }else if(fnCheckCol(tabObjetColone) == 1){

    }else if( fnCheckOblique(tabObjetLigne, tabObjetColone) == 1){

    }
}




createArrayOneHundredCases()
//choiceColorFunction()