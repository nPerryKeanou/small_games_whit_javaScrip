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