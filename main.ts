let farba = 0
let led2 = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
let range = strip.range(4, 7)
let range14 = strip.range(0, 4)
basic.forever(function () {
    for (let _index = 0; _index <= 8; _index++) {
        farba = _index * 10
        strip.setPixelColor(_index, neopixel.rgb(farba, farba * _index, farba * farba))
        strip.show()
        basic.pause(1000)
    }
})
