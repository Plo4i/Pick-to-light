input.onButtonPressed(Button.AB, function () {
    radio.setGroup(1)
    radio.sendNumber(1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "1") {
        radio.setGroup(2)
        radio.sendNumber(2)
    }
    if (name == "2") {
        radio.setGroup(3)
        radio.sendNumber(3)
    }
    if (name == "3") {
        radio.setGroup(1)
        radio.sendNumber(1)
    }
})
basic.showString("READY")
let RadioGroup0 = 1
let RadioGroup1 = 1
let RadioGroup2 = 2
let RadioGroup3 = 3
radio.setTransmitPower(2)
basic.forever(function () {
    if (RadioGroup0 == RadioGroup1 && input.buttonIsPressed(Button.A)) {
        RadioGroup0 = RadioGroup2
        basic.showNumber(RadioGroup2)
        radio.setGroup(RadioGroup0)
        if (input.buttonIsPressed(Button.B)) {
            radio.sendNumber(RadioGroup0)
        }
    }
    if (RadioGroup0 == RadioGroup2 && input.buttonIsPressed(Button.A)) {
        RadioGroup0 = RadioGroup3
        basic.showNumber(RadioGroup3)
        radio.setGroup(RadioGroup0)
        if (input.buttonIsPressed(Button.B)) {
            radio.sendNumber(RadioGroup0)
        }
    }
    if (RadioGroup0 == RadioGroup3 && input.buttonIsPressed(Button.A)) {
        RadioGroup0 = RadioGroup1
        basic.showNumber(RadioGroup1)
        radio.setGroup(RadioGroup0)
        if (input.buttonIsPressed(Button.B)) {
            radio.sendNumber(RadioGroup0)
        }
    }
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        for (let index = 0; index < 4; index++) {
            basic.showNumber(3)
            basic.pause(500)
            basic.showNumber(1)
            basic.pause(500)
            basic.showNumber(2)
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.pause(2000)
        }
    }
})
