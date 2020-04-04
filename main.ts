input.onButtonPressed(Button.A, function () {
    autko.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    autko.change(LedSpriteProperty.X, 1)
})
let ObstacleX = 0
let autko: game.LedSprite = null
basic.showString("RIVER RIDE")
basic.pause(200)
basic.showNumber(3)
basic.pause(200)
basic.showNumber(2)
basic.pause(200)
basic.showNumber(1)
basic.pause(200)
basic.showString("GO!")
let obstacles: game.LedSprite[] = []
autko = game.createSprite(2, 0)
autko.set(LedSpriteProperty.Blink, 200)
autko.set(LedSpriteProperty.Brightness, 100)
let ticks = 0
let pauza = 1000
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.Y) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.Y, -1)
    }
    if (ticks % 3 == 0) {
        ObstacleX = Math.randomRange(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index == ObstacleX) {
                obstacles.push(game.createSprite(index, 4))
                if (ticks % 15 == 9) {
                    if (ObstacleX == 0) {
                        obstacles.push(game.createSprite(1, 4))
                    } else if (ObstacleX == 4) {
                        obstacles.push(game.createSprite(3, 4))
                    } else {
                        obstacles.push(game.createSprite(index + 1, 4))
                    }
                }
                if (ticks % 33 == 30) {
                    if (ObstacleX == 0) {
                        obstacles.push(game.createSprite(1, 4))
                        obstacles.push(game.createSprite(2, 4))
                    } else if (ObstacleX == 4) {
                        obstacles.push(game.createSprite(3, 4))
                        obstacles.push(game.createSprite(2, 4))
                    } else if (ObstacleX == 1) {
                        obstacles.push(game.createSprite(3, 4))
                        obstacles.push(game.createSprite(2, 4))
                    } else if (ObstacleX == 2) {
                        obstacles.push(game.createSprite(1, 4))
                        obstacles.push(game.createSprite(3, 4))
                    } else {
                        obstacles.push(game.createSprite(2, 4))
                        obstacles.push(game.createSprite(4, 4))
                    }
                }
            }
        }
    }
    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.Y) == autko.get(LedSpriteProperty.Y) && obstacle.get(LedSpriteProperty.X) == autko.get(LedSpriteProperty.X)) {
            game.setScore(ticks)
            game.gameOver()
        }
    }
    ticks += 1
    if (ticks % 20 == 19) {
        pauza += -100
    }
    basic.pause(pauza)
})
 