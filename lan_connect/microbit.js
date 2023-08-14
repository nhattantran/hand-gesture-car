serial.onDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    message = serial.readUntil(serial.delimiters(Delimiters.Fullstop))
    serial.redirect(
    SerialPin.P1,
    SerialPin.P2,
    BaudRate.BaudRate9600
    )
    if (message == "0") {
        basic.showNumber(0)
    } else if (message == "1") {
        basic.showNumber(1)
    } else if (message == "2") {
        basic.showNumber(2)
    } else if (message == "3") {
        basic.showNumber(3)
    } else if (message == "4") {
        basic.showNumber(4)
    } else if (message == "5") {
        basic.showNumber(5)
    } else if (message == "6") {
        basic.showNumber(6)
    } else if (message == "7") {
        basic.showNumber(7)
    } else if (message == "8") {
        basic.showNumber(8)
    } else if (message == "9") {
        basic.showNumber(9)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(100)
    serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate19200
    )
})
let message = ""
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate19200
)
basic.showIcon(IconNames.Yes)
basic.pause(200)
radio.setGroup(10)
basic.clearScreen()
