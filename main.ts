input.onSound(DetectedSound.Quiet, function () {
    music.play(music.stringPlayable("E - B - A C5 F G ", 40), music.PlaybackMode.InBackground)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(1000)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.setColor(0x0000ff)
    maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOff)
    maqueen.setColor(0x000000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
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
input.onSound(DetectedSound.Loud, function () {
    music.playMelody("C5 E A D G C D D ", 120)
    basic.setLedColors(0x0000ff, 0x7f00ff, 0x007fff)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
	
})
basic.forever(function () {
    serial.writeLine("" + (maqueen.irRead()))
})
basic.forever(function () {
    if (maqueen.irRead() == 175) {
        basic.turnRgbLedOff()
    }
})
