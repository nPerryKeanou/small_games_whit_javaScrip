/*
    - Création d'un tableau avec les noms et les sources.
*/
const cardArray = [
    {
        name : 'fries',
        image : 'images/fries.png'
    },
    {
        name : 'hotdog',
        image : 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        image : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        image : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        image : 'images/pizza.png'
    },
    {
        name : 'cheeseburger',
        image : 'images/cheeseburger.png'
    },
    {
        name : 'fries',
        image : 'images/fries.png'
    },
    {
        name : 'hotdog',
        image : 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        image : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        image : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        image : 'images/pizza.png'
    },
    {
        name : 'cheeseburger',
        image : 'images/cheeseburger.png'
    }
]


//on trie le tableau de facon random
cardArray.sort(() => 0.5 - Math.random())


/*
    - on crée une constante qui va récuperer l'id grid du dom
    - on crée une constante qui va récuperer l'id result du dom
    - on crée trois autre table, pour les cases choisis,
        pour les id des cases choisis et pour les cases win
*/
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
let cardWon = []
let cardsUse = []


/*
    - Une fonction qui va créer le tableau d'image.
        On boucle tant que  i qui = 0 est plus petit que la 
        longueur du tableau de case.
        Pour chaque élément créé, on va lui donner comme
        attribut; 'src' et sa vrai source.
        Ainsi que l'attribut, data-id et  un id qui sera
        la valeur du tour de boucle ( i ).
        On donne a chaque élément du tableau, un événement click
        et la fonction qui en résulte. C'est a dire que chaque élément
        sera capable de lancer une fonction lorsque l'on cliquera dessus.
        On ajoute cet élément dans l'élément grid du dom.
*/

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

/*

*/
function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]

    console.log(optionOneId)
    console.log(optionTwoId)
    
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('you have clicked the same image')
    }else if (cardChosen[0] === cardChosen[1]) {
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('cick', flipCard)
        cards[optionTwoId].removeEventListener('cick', flipCard)
        cardWon.push(cardChosen)
        cardsUse.push(cards[optionOneId])
        cardsUse.push(cards[optionTwoId])
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry, try again')
    }
    resultDisplay.textContent = cardWon.length
    cardChosen = []
    cardChosenIds = []

    if (cardWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'congratulation, you found then all'
    }
}


/*

*/
function flipCard(){
    const cardId = this.getAttribute('data-id')
    console.log("la valeur de cardId ======> " + cardId)
    console.log("la valeur de THIS ======> " + this.getAttribute('data-id'))
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].image)
    if (cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}

createBoard()