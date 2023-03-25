input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (true) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.clearScreen()
    }
})
let logging = false
logging = false
loops.everyInterval(60000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("Temp", input.temperature()),
        datalogger.createCV("Light ", input.lightLevel())
        )
    }
})
