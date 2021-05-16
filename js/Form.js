class Form {
    constructor() {
        this.title = createElement('h2')
        this.input = createInput('NAME')
        this.button = createButton('PLAY')
        this.reset = createButton('RESET')
        this.greeting = createElement('h3')
    }

    hide() {
        this.greeting.hide()
    }
    display() {

        this.title.html('CAR RACING GAME')
        this.title.position(displayWidth / 2 - 50, 0)



        this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80)
        this.button.position(displayWidth / 2 + 30, displayHeight / 2)
        this.reset.position(displayWidth - 100, 20)

        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()

            player.name = this.input.value()

            playerCount += 1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("HELLO " + player.name)
            this.greeting.position(displayWidth / 2 - 70, displayHeight / 4)
        })

        this.reset.mousePressed(() => {
            player.updateCount(0)
            game.update(0)
            Player.updateCarsAtEnd(0)
            location.reload()
        })
    }
}