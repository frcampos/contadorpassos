radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    radio.setGroup(1)
    basic.showNumber(receivedNumber)
})
//  Transmite Passos para o outro microbit
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(passosdados)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(temperaturaMaximaregistada)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    passos = passosdados
    passos += 1
    passosdados = passos
    passosdados += passosdados
    basic.showNumber(passosdados)
})
//  Quando se pressiona reinicia contagem de passos
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    passosdados = 0
    passos = 0
})
//  Definido grupo de radio para 1 de forma a sincronizar apenas com esse grupo Radio.
//  Inicialização de variáveis globais.
//  Visualização de símbolo para verificação inicial.
let temperaturaMaximaregistada = -5
let temperaturaReal = -5
let passos = 0
let passosdados = 0
radio.setGroup(1)
passosdados = 0
passos = 0
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
basic.forever(function on_forever() {
    
    temperaturaReal = input.temperature()
    basic.showNumber(temperaturaReal)
    temperaturaMaximaregistada = Math.max(temperaturaMaximaregistada, temperaturaReal)
    basic.pause(1500)
})
