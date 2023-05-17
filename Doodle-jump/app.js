document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let startPoint = 150
    let doodlerBottomSpace = startPoint
    let isGameOver = false
    let platformCount = 5
    let platforms = []
    let upTimerId
    let downTimerId
    let isJumping = true
    let isGoinfLeft = false
    let isGoinfRight = false
    let leftTimerId
    let rightTimerId
    let score = 0


    /*
        Création de platform.
        Une boucle qui va créer des plateforms selon le nombre de platFormCount.
            On crée une variable platGap qui aura comme valeur, la taille de grid / par le nb de plateforme
            On crée une variable newPlatBottom qui aura comme valeur, 100 + i * (taille de grid / par le nb de plateforme). Les plateform auront leur hauteur
            On crée la plateform qui sera un objet de class, l'argument 'newPlatBottom' est le constructor de la class
            On ajoute cette objet dans un tableau 
    */
    function createPlatforms() {
        for (let i = 0; i < platformCount; i++){
            let platGap = 600 / platformCount
            let newPlatBottom = 100 + i * platGap
            console.log("newPlatBottom ---> " + newPlatBottom + " i ---->  " + i)
            let newPlatform = new Platform(newPlatBottom)
            platforms.push(newPlatform)
            //console.log(platforms)
        }
    }


    /*
        création du doodler.
        On ajoute dans la div 'grid', une div 'doodler' qui à été crée au lancemen du fichier.
        On donne a cette div, un attribut class qui a pour valeur 'doodler'.
        doodlerLeftSpace prendra la valeur de platforms[0].left qui == la valeur de la coordonnée gauche du DOMRECT (l'emplacement de la platform)
        On donne à la div doodler, des style.left et style.bottom en px. Style.bottom aura la valeur donné au début.  
    */
    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodlerLeftSpace = platforms[0].left
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'        
    }



    /*
        creation de la class platform. Une class pour chaque objet platform créées.
        le constructeur prend l'argument newPlatBottom. Une variable crée dans la fn creatPlatform, elle a pour valeur (100 + i * platGap), ce qui change a chaque objet créés.
        On donne à la propriété bottom, la let newPlatBottom, qui va changer pour chaque objet créés.
        On donne à la propriété left, une valeur aléatoire en 0 et 315, qui va changer a chaque objet (il est possible d'avoir deux les meme)
        On créé une instance visaul et on lui crée un element, une div

        ensuite, on créé une constante visual, qui prendra la valeur de l'instance visual de la class (this.visual).
        On donne un attribut class de valeur platform.
        On donne du css, left, elle aura pour valeur, la valeur du this.left ( l'emplacement du DOMRECT de l'objet crée ) + 'px' 
        On donne du css, bottom, elle aura pour valeur, la valeur du this.bottom ( l'emplacement du DOMRECT de l'objet crée ) + 'px'
        On ajoute cette constante à grid

        Ceci, crée une plateforme
    */
    class Platform {
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }


    /*

    */
    function movePlatforms() {
        if (doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
                platform.bottom -= 4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'

                if (platform.bottom < 10) {
                    let firstPlatform = platforms[0].visual
                    firstPlatform.classList.remove('platform')
                    platforms.shift()
                    score++
                    let newPlatform = new Platform(600)
                    platforms.push(newPlatform)
                }
            })
        }
    }

    function gameOver() {
        console.log("game over")
        isGameOver = true
        while (grid.firstChild){
            grid.removeChild(grid.firstChild)
        }
        grid.innerHTML = score
        clearInterval(upTimerId)
        clearInterval(downTimerId)
        clearInterval(leftTimerId)
        clearInterval(rightTimerId)
    }

    function fall() {
        clearInterval(upTimerId)
        isJumping = false
        downTimerId = setInterval(function () {
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace <= 0){
                gameOver()
            }
            platforms.forEach(platform => {
                if 
                (
                    (doodlerBottomSpace >= platform.bottom) &&
                    (doodlerBottomSpace <= platform.bottom + 15) &&
                    ((doodlerLeftSpace + 60) >= platform.left) &&
                    !isJumping 
                ){
                    console.log('landed')
                    startPoint = doodlerBottomSpace
                    jump()
                }
            })
        }, 30)
    }


    function jump() {
        clearInterval(downTimerId)
        isJumping = true
        upTimerId = setInterval(function (){
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace > startPoint + 200) {
                fall()
            }
        }, 30)
    }

    function control(e) {
        if (e.key === "ArrowLeft"){
            moveLeft()
        }else if (e.key === "ArrowRight"){
            moveRight()
        } else if(e.key === "ArrowUp") {
            moveStraight()
        }

    }

    function moveLeft() {
        if (isGoinfRight){
            clearInterval(rightTimerId)
            isGoinfRight = false
        }
        isGoinfLeft = true
        leftTimerId = setInterval(function () {
            if (doodlerLeftSpace >= 0){
                doodlerLeftSpace -= 5
                doodler.style.left = doodlerLeftSpace + 'px'
            } else moveRight()
        }, 20)
    }

    function moveRight(){
        if (isGoinfLeft){
            clearInterval(leftTimerId)
            isGoinfLeft = false
        }
        isGoinfRight = true
        rightTimerId = setInterval(function () {
            if (doodlerLeftSpace <= 340) {
                doodlerLeftSpace += 5
                doodler.style.left = doodlerLeftSpace + 'px'
            } else moveLeft()
        }, 20)
    }

    function moveStraight(){
        isGoinfLeft = false
        isGoinfRight = false
        clearInterval(rightTimerId)
        clearInterval(leftTimerId)
    }



    /*
        Fonction principal.
        Elle check si IsGameOver n'est pas false. Si il est pas false, on rentre dans la condition.
        On lance la fonction createPlateform.
        Ensuite, on lance la fonction createDoodler.
        Ensuite, on lance une interval sur la fonction movePlateform.
        Ensuite, on lance la function jump.
        Event sur keyup.
    */
    function start() {
        if (!isGameOver) {
            createPlatforms()
            createDoodler()
            setInterval(movePlatforms, 30)
            jump()
            document.addEventListener('keyup', control)
        }
    }
    start()







})