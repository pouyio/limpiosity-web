# CIRCUITS
In this section we will show everything related to the conditioning circuits and the sensors and components used with their values.

## MOTOR DRIVER. H BRIDGE
A *"H Bridge"* is an [electronic circuit](https://en.wikipedia.org/wiki/H_bridge) that lets the DC motor spin in both directions, back and forth. They are widely used in robotics and as power converters. H bridges are availabe as integrated circuits but they can also be built from discrete components.

H bridge alongside with DC motors let the robot have a good movility. Also the [PWM signals](https://www.arduino.cc/en/Tutorial/PWM) from Arduino make the task of programming a relatively easy duty. The H bridge used in this project is capable of managing two motors at the same time and it is based in the classic **L298** H bridge, but this one is integrated in a shield to plug directly on top of the Arduino, what makes more stable the whole board and saves space.
![driver de motores](../images/circuits/driver.png)

## WHEATHSTONE BRIDGE AND SCHMITT TRIGGER
Formed by:
+ LDR
+ Potentiometer 10K
+ 2 Resistances 6.4K
+ 2 Resistances 10K
+ 1 Resistance 100K
+ Capacitor 0.1uF
+ **Comparator LM311**

External connections:
+ Arduino mega digital pin 31
+ VCC
+ GND

The circuit is a [Weathstone bridge](https://en.wikipedia.org/wiki/Wheatstone_bridge) configuration with both resistances of 6.4K, LDR and the potentiometer, this last used to set the offset voltage on the bridge output:
![scheme weathstone](../images/circuits/weathstone-esquema.png)

We connect the bridge output to **LM311** comparator inputs `V+` and `V-`. Comparator hysteresis will be adjusted with `R1` and `R2` resistances. Comparator output will be connected to a digital pin in Arduino. This will receive a logic (0/1) value depending on how much light hits the LDR. Thanks to that, we can broadcast an interruption in the microcontroller and turn on or off the LEDs without having to read the ohmic value in the LDR constantly. This concept will be expanded in the [Code](./code.html). section
 Ampliaremos este concepto en la sección [Código](./code.html).

## LM317 VOLTAGE REGULATOR
This circuits consists of the **LM317** regulator itself and some resistances.The need of using a regulator comes in the middle of the project when we realise that Arduino board is unable to provide current to all the sensors and actuators, note that Arduino can only give 500mA in total. To solve this problem we decided to add another battery, this time 6V. This new power source would provide enegy to the ultrasonic sensor and the RF module, both with a requirement of 5V. To transform those 6V. into 5V. that the sensors can manage, we build a circuit like the image adjusting the LM317 with the resistances. In our case it was not neccesary using a *capacitor* thanks to the high stabilty of the source.
![voltage regulator LM317](../images/circuits/LM317.png)

## REMOTE CONTROL
Formed by:
+ Three-state switch
+ Arduino Uno
+ RF Transmitter
+ Wiring
+ Antenna
+ Switches
+ Resistances

We will use this unit to control the working mode and movements in case the robot is set to manual. There are three working modes:
+ **Standby**: The robot will not do anything and will stay still awaiting for a working mode change consuming the minimum energy.
+ **Automatic mode**: The robot will start moving in all the space available using its sensors to avoid collisions while vacuuming the floor.
+ **Manual mode**: The user can control the robot and move it with the buttons in the remote control board.
