I2C_LCD1602.LcdInit(63)
I2C_LCD1602.ShowString("Smart Pot", 0, 0)
I2C_LCD1602.ShowString("Hello......", 0, 1)
basic.pause(2000)
I2C_LCD1602.ShowString("POT  | Temp:   C", 0, 0)
I2C_LCD1602.ShowString("INFO | Hum:    %", 0, 1)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    true,
    true
    )
    I2C_LCD1602.ShowNumber(Math.round(dht11_dht22.readData(dataType.temperature)), 13, 0)
    I2C_LCD1602.ShowNumber(dht11_dht22.readData(dataType.humidity), 13, 1)
})
