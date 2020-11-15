radio.onReceivedNumber(function (receivedNumber) {
    radio.setGroup(1)
    basic.showNumber(receivedNumber)
})
// Transmite Passos para o outro microbit
input.onButtonPressed(Button.A, function () {
    radio.sendString("P")
    radio.sendNumber(passosdados)
})
input.onGesture(Gesture.Shake, function () {
    passos = passosdados
    passos += 1
    passosdados = passos
    passosdados += passosdados
    basic.showNumber(passosdados)
})
// Quando se pressiona reinicia contagem de passos
input.onButtonPressed(Button.AB, function () {
    passosdados = 0
    passos = 0
})
radio.onReceivedString(function (receivedString) {
    radio.setGroup(1)
    if (receivedString == "P") {
        basic.showString("Passos")
        basic.pause(500)
        basic.showNumber(passosdados)
        basic.pause(2000)
    } else {
        basic.showString("Temperatura")
        basic.pause(100)
        basic.showNumber(temperaturaMaximaregistada)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("T")
    radio.sendNumber(temperaturaMaximaregistada)
})
let passos = 0
let passosdados = 0
let temperaturaMaximaregistada = 0
// Definido grupo de radio para 1 de forma a sincronizar apenas com esse grupo Radio.
// Inicialização de variáveis globais.
// Visualização de símbolo para verificação inicial.
temperaturaMaximaregistada = -5
let temperaturaReal = -5
radio.setGroup(1)
passosdados = 0
passos = 0
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    temperaturaReal = input.temperature()
    basic.showNumber(temperaturaReal)
    temperaturaMaximaregistada = Math.max(temperaturaMaximaregistada, temperaturaReal)
    basic.pause(1500)
})
