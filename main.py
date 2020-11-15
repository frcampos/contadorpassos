

def on_received_number(receivedNumber):
    radio.set_group(1)
    basic.show_number(receivedNumber)
radio.on_received_number(on_received_number)

# Transmite Passos para o outro microbit

def on_button_pressed_a():
    radio.send_number(passosdados)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_number(temperaturaMaximaregistada)
     radio.send_number()

input.on_button_pressed(Button.B, on_button_pressed_b)

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
    global passosdados, passos
    passosdados = 0
    passos = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Definido grupo de radio para 1 de forma a sincronizar apenas com esse grupo Radio.
# Inicialização de variáveis globais.
# Visualização de símbolo para verificação inicial.

temperaturaMaximaregistada = -5
passos = 0
passosdados = 0
radio.set_group(1)
passosdados = 0
passos = 0
basic.show_icon(IconNames.YES)
basic.pause(1000)
basic.clear_screen()

def on_forever():
    global  temperaturaMaximaregistada,  temperaturaReal
    temperaturaReal = input.temperature()
    basic.show_number(temperaturaReal)
    temperaturaMaximaregistada = max(temperaturaMaximaregistada, temperaturaReal)
    basic.pause(1500)
basic.forever(on_forever)