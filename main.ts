radio.onReceivedNumber(function (receivedNumber) {
    radio.setGroup(1)
    basic.showNumber(receivedNumber)
})
// Transmite Passos para o outro microbit
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
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
    temperaturaReal = input.temperature()
    temperaturaMaximaregistada = input.temperature()
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    radio.setGroup(1)
    if (receivedString == "P") {
        basic.showString("Passos")
    } else {
        basic.showString("Tmax.")
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("T")
    radio.sendNumber(temperaturaMaximaregistada)
})
let passos = 0
let passosdados = 0
let temperaturaMaximaregistada = 0
let temperaturaReal = 0
temperaturaReal = input.temperature()
temperaturaMaximaregistada = input.temperature()
radio.setGroup(1)
passosdados = 0
passos = 0
basic.showIcon(IconNames.Yes)
basic.pause(200)
basic.clearScreen()
basic.forever(function () {
    temperaturaReal = input.temperature()
    temperaturaMaximaregistada = Math.max(temperaturaMaximaregistada, temperaturaReal)
    basic.pause(100)
})
