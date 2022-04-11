input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # # . # #
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(25)
    basic.showIcon(IconNames.Heart)
    basic.pause(450)
})
basic.forever(function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
