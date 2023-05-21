const cardObjectEdefinition = [
    {id:1, imagePath:'./images/card-KingHearts.png'},
    {id:2, imagePath:'./images/card-jackClubs.png'},
    {id:3, imagePath:'./images/card-QeenDiamonds.png'},
    {id:4, imagePath:'./images/card-AceSpades.png'},
]

const cardBackImgPath = './images/card-black-blue.png'

{/* <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="./images/card-JackClubs.png" alt="cardJackCLub" class="card-img">
                    </div>
                    <div class="card-back">
                        <img src="./images/card-back-Blue.png" alt="cardBackBlue" class="card-img">
                    </div>
                </div>
            </div> */}

function createCard(cardItem) {
    //create a div element that make up a card
    const cardElem = document.createElement('div')
    const cardInnerElem = document.createElement('div')
    const cardFrontElem = document.createElement('div')
    const cardBackElem = document.createElement('div')

    //create fonrt and back images element for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    //add class and id to card element
    addClassToElement(cardElem, 'card')
    addIdToElemet(cardElem, cardItem.id)

    //add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    //add class to front card element
    addClassToElement(cardFrontElem, 'card)front')

    //add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    //add src attribute and appropriate value to img element - back of card
    addScrToImgElement(cardBackElem, cardBackImgPath)

    //add src attribute and appropriate value to img element - front of card
    addScrToImgElement(cardFrontElem, cardItem.imagePath)

}

function createElement(elemType) {
    return document.createElement(elemType)
}

function addClassToElement(elem, className) {
    elem.classList.add(className)
}

function addIdToElemet(elem, id) {
    elem.id = id
}

function addScrToImgElement(imgElement, src) {
    imgElem.src = src
}