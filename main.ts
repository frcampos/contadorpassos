// Ao receber o número do número de passos ou temperartura máxima obtida durante o percurso.
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
// Conta os passos e mostra no ecrã. Num caso real para aumentar a autonomia da bateria deverá ser removido o bloco "mostrar número "passosdados".
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
// Verifica se se trata de mostrar o número de passos ou a temperatura máxima, dependendo do Botão que se pressiona.
radio.onReceivedString(function (receivedString) {
    radio.setGroup(1)
    if (receivedString == "P") {
        basic.showString("Passos")
    } else {
        basic.showString("Tmax.")
        basic.pause(200)
    }
})
// Envia a informação sobre a temperatura máxima registada
input.onButtonPressed(Button.B, function () {
    radio.sendString("T")
    radio.sendNumber(temperaturaMaximaregistada)
})
// Definição das variáveis, de temperatura e passos.
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
// Regista temperatura de forma continua.
basic.forever(function () {
    temperaturaReal = input.temperature()
    temperaturaMaximaregistada = Math.max(temperaturaMaximaregistada, temperaturaReal)
    basic.pause(100)
})
