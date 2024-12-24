def on_button_a():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 100)
    basic.pause(1000)
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.pause(1000)
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 100)
    basic.pause(1000)
    maqueen.motor_stop(maqueen.Motors.ALL)
    maqueen.set_color(0xff0000)
    basic.pause(1000)
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 200)
    basic.pause(5000)
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 200)
    basic.pause(5000)
    maqueen.motor_stop(maqueen.Motors.ALL)
    maqueen.write_led(maqueen.Led.LED_ALL, maqueen.LedSwitch.LED_OFF)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_forever():
    pass
basic.forever(on_forever)
