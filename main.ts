I2C_LCD1602.LcdInit(63)
I2C_LCD1602.ShowString("--- SMART POT --", 0, 0)
I2C_LCD1602.ShowString("      HELLO     ", 0, 1)
basic.pause(2000)
I2C_LCD1602.ShowString(" POT | Tem:    C", 0, 0)
I2C_LCD1602.ShowString("INFO | Hum:    %", 0, 1)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    true,
    true
    )
    I2C_LCD1602.ShowNumber(Math.round(dht11_dht22.readData(dataType.temperature)), 12, 0)
    I2C_LCD1602.ShowNumber(dht11_dht22.readData(dataType.humidity), 12, 1)
})
