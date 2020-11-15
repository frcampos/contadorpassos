def on_received_number(receivedNumber):
    radio.set_group(1)
    basic.show_number(receivedNumber)
radio.on_received_number(on_received_number)

# Transmite Passos para o outro microbit

def on_button_pressed_a():
    radio.set_group(1)
    radio.send_string("P")
    radio.send_number(passosdados)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global passos, passosdados
    passos = passosdados
    passos += 1
    passosdados = passos
    passosdados += passosdados
    basic.show_number(passosdados)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

# Quando se pressiona reinicia contagem de passos

def on_button_pressed_ab():
    global passosdados, passos, temperaturaReal, temperaturaMaximaregistada
    passosdados = 0
    passos = 0
    temperaturaReal = input.temperature()
    temperaturaMaximaregistada = input.temperature()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    radio.set_group(1)
    if receivedString == "P":
        basic.show_string("Passos")
    else:
        basic.show_string("Tmax.")
        basic.pause(200)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    radio.send_string("T")
    radio.send_number(temperaturaMaximaregistada)
input.on_button_pressed(Button.B, on_button_pressed_b)

passos = 0
passosdados = 0
temperaturaMaximaregistada = 0
temperaturaReal = 0
temperaturaReal = input.temperature()
temperaturaMaximaregistada = input.temperature()
radio.set_group(1)
passosdados = 0
passos = 0
basic.show_icon(IconNames.YES)
basic.pause(200)
basic.clear_screen()

def on_forever():
    global temperaturaReal, temperaturaMaximaregistada
    temperaturaReal = input.temperature()
    temperaturaMaximaregistada = max(temperaturaMaximaregistada, temperaturaReal)
    basic.pause(100)
basic.forever(on_forever)
