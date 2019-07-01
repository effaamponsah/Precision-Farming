---
id: sensors
title: Devices
sidebar_label: Devices
---
A decorated list of devices used is found here. Links to each of their datasheets and the libraries which are used to program them can be found here.

## Control Unit

### Raspberry pi

![Raspberrypi](../)
- The Raspberry pi 3 model B is a small, inexpensive computer powered by an ARM processor. It features a quad-core ARM Cortex A53 with speed of 1.2 GHz. The SoC has 1GB of LPDDR2-900SDRAM and is powered with graphics capabilities by the Video Core IV GPU. Read more [here]()

- [Download data sheet](../)


## Sensors
### Soil Temperature Sensor (DS18B20)

![DS18B20](../)
- The DS18B20 digital thermometer provides 9-bit to 12-bit Celsius temperature measurements. The DS18B20 communicates over a 1-Wire bus that by definition, requires only one data line (and ground) for communication with a central microprocessor. Read more [here]()

- [Download data sheet](../)

- Path to file `dashboard\combinedCode\ds18b20.py`

### pH Sensor Module (E-201-C)

![E-201-C](../)
- The DS18B20 digital thermometer provides 9-bit to 12-bit Celsius temperature measurements. The DS18B20 communicates over a 1-Wire bus that by definition, requires only one data line (and ground) for communication with a central microprocessor. Read more [here]()

- Since the readings is in analog format, an [ADC](google.com/adc) is needed to 

- [Download data sheet](../)

- Path to file `dashboard\combinedCode\ADC.py`

### Analog-to-Digital Converter

![E-201-C](../)
- TThe ADS11115 manufactured by Texas Instruments is used. It is a low-power, high precision, 16-bit ultra-small device. The device communicates with the microcontroller via I2C. The ADS1115 also incorporate a programmable gain amplifier (PGA) and a digital comparator. These features, along with a wide operating supply range, make the ADS1115 well suited for power- and space-constrained, sensor measurement applications. Read more [here]()

- [Download data sheet](../)

- Path to file `dashboard\combinedCode\ADC.py`

### Atmospheric Temperature and Humidity Sensor (GY-21P)

![GY-21P](../)
- The atmospheric temperature and humidity sensor is a fully calibrated, lower power consumption device that can be used in many applications such as in printers, humidifiers, home appliances and the defogging in automotive. Communication between the device and the micro-controller is over I2C. 
This board has two chips on them, one for the temperature and humidity and the other for the pressure(unsed).

#### Si7021-A20

- The Si7021 I2C Humidity and Temperature Sensor is a monolithic CMOS IC integrating humidity and temperature sensor elements, an analog-to-digital converter, signal processing, calibration data, and an I2C Interface. The patented use of industry-standard, low-K polymeric dielectrics for sensing humidity enables the construction of low-power, monolithic CMOS Sensor ICs with low drift and hysteresis, and excellent long term stability. Read more [here]()

- [Download data sheet](../)

- Path to temperature `dashboard\combinedCode\temp2.py`
- Path to humidity `dashboard\combinedCode\gy21.py`

#### BMP 280 (Digital Pressure Sensor)

- The BMP280 is an absolute barometric pressure sensor specially desgined for mobile applications. The sensor module is housed in an extremely compact 8-pin metal-lid LBA package with a footprint of only 2.0x2.5 mm2 and 0.95 mm package height.  Read more [here]()

- [Download data sheet](../)

- Path to file `dashboard\combinedCode\temp2.py`
