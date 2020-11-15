radio.onReceivedNumber(function (receivedNumber) {
    radio.setGroup(1)
    basic.showNumber(receivedNumber)
})
// Transmite Passos para o outro microbit
input.onButtonPressed(Button.A, function () {
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
let passos = 0
let passosdados = 0
radio.setGroup(1)
passosdados = 0
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
