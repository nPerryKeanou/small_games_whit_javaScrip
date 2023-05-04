const grid = document.querySelector('#grid')
const ballUserOne = document.createElement('div')
const ballUserTwo = document.createElement('div')
const choiceColorBlue = document.querySelector('#choice-color-blue')
const choiceColorRed = document.querySelector('#choice-color-red')
const userOne = 0
const userTwo = 0
// 0 == blue et 1 == red
let choiceUserOne = 0
let choiceUserTwo = 0

let oneHundredArray = document.querySelector('#table-100-cases')
let arrayHundred = [[],[],[],[],[],[],[],[],[],[]]



//function qui cree un tableau de 10 tableau de 10 case./**
function createArrayOneHundredCases() {
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const caseArrayHundred = document.createElement('div')
            caseArrayHundred.setAttribute('colorChoice', 'white')
            caseArrayHundred.classList.add('caseHundredArray')
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




/*
if (choiceUserOne == 0 && choiceUserTwo == 0){
    choiceColorBlue.addEventListener('click', function(){
        choiceUserOne = 0
        choiceUserTwo = 1
        choiceUserTwo.removeEventListener('click', true)
        console.log('choiceUserOne ==> ' + choiceUserOne + ' and choiceUserTwo ' + choiceUserTwo)
    })
    if (choiceUserOne == 0 && choiceUserTwo == 0){
        choiceColorRed.addEventListener('click', function(){
            choiceUserOne = 1
            choiceUserTwo = 0
            choiceUserOne.removeEventListener('click', true)
            console.log('choiceUserOne ==> ' + choiceUserOne + ' and choiceUserTwo ' + choiceUserTwo)
        })    
    }
}

*/

/*
if (choiceUserOne == 0 || choiceUserTwo == 0){
    choiceColorBlue.addEventListener('click', function(){
        choiceUserOne = 0
        choiceUserTwo = 1
        console.log('choiceUserOne ==> ' + choiceUserOne + ' and choiceUserTwo ' + choiceUserTwo)
    })
}
else if(choiceUserTwo = 0){
    choiceColorRed.addEventListener('click', function(){
        choiceUserOne = 1
        choiceUserTwo = 0
        console.log('choiceUserOne ==> ' + choiceUserOne + ' and choiceUserTwo ' + choiceUserTwo)
    })
}
*/

function choiceCase(){
    console.log('create case')
    /*const caseDiv = document.createElement('div')
    caseDiv.style.width = '15px'
    caseDiv.style.height = '15px'
    caseDiv.style.borderRadius = '20px'
    if (choiceUserOne)
    */
}




//cree une variable user, qui prend une class 'color' selon le boutton couleur clicke. L'autre user aura directement l'autre couleur
/*
function choiceColorFunction(){
    if (buttonColor.getElementsById('choice-color-blue')){
        choiceUserOne = 1
        choiceUserTwo = 2
        console.log('choiceUserone ==> ' + choiceUserOne + ' and choiceUserone ==> ' + choiceUserTwo)
        buttonColor.removeEventListener('click',choiceColorFunction)
    }
    if(buttonColor.getElementsById('choice-color-red')){
        choiceUserOne = 2
        choiceUserTwo = 1
        console.log('choiceUserone ==> ' + choiceUserOne + ' and choiceUserone ==> ' + choiceUserTwo)
        buttonColor.removeEventListener('click',choiceColorFunction)
    }
}


buttonColor.addEventListener('click', choiceColorFunction)
*/




//selon le tour du joueur, la couleur changera. joue1 / joueur 2. peut etre faire un tableau de 2 case, et qui change une fois sur deux.


createArrayOneHundredCases()
//choiceColorFunction()