# CIRCUITOS
En esta sección se muestra todo lo relacionado con los circuitos de acondicionamiento asociados a los sensores que se han utilizado con los valores de resistencias, condensadores y otros componentes usados.

## DRIVER DE MOTORES. PUENTE EN H
Un Puente H o Puente en H es un iruito eletrónio que permite a un motor elétrio DC girar en ambos sentidos, avane y retroeso. Son ampliamente usados en robótia y omo onvertidores de potenia. Los puentes H están disponibles omo iruitos integrados, pero también pueden onstruirse a partir de omponentes disretos.

El puente en H junto on los motores de ontinua, nos permiten una movilidad total del autómata que junto on la posibilidad de la utilizaión de señales PWM del Arduino, haen de la programaión una tarea relativamente senilla. El puente en H usado para este proyeto nos permite utilizar dos motores, esta basado en el lásio puente en H L298, pero integrado en una shield para oloar sobre el arduino, lo que nos failita enormemente la estabilidad del mismo,así omo una ompataión mayor de la eletrónia.
![driver de motores](./images/circuits/driver.png)

## PUENTE DE WEATHSTONE Y COMPARADOR POR HISTÉRESIS
Compuesto por:
+ LDR
+ Poteniometro 10K
+ 2 Resistenias 6.4K
+ 2 Resistenias 10K
+ 1 Resistenia 100K
+ Condensador de 0.1uF
+ Comparador LM311

Conexiones externas de funcionamiento:
+ Pin digital 31 de Arduino Mega
+ VCC
+ GND

El circuito es una configuración de puente de Wheatstone on las 2 resistenias de 6.4K, LDR y p oteniometro, este último para a justar la tensión de oset de salida del puente:
![esquema weathstone](./images/circuits/weathstone-esquema.png)

Introduimos las salidas del puente a las entradas V+ y V- del omparador LM311. La Histéresis del omparador será a justada on las resistenias de R1 y R2. La salida del omparador será introduida en el Pin Digital de Arduino que se desee.Este, reibirá un valor lógio en funión de la antidad de luz a la que la LDR sea expuesta.Graias a esto podremos generar una interrupión en el miroontrolador para el ontrol de los LEDs de iluminaión sin tener que evaluar el valor  óhmio de la LDR de manera onstante.Ampliaremos este onepto en la seión dediada a las interrupiones.

## REGULADOR DE TENSIÓN LM317
Compuesto por el regulador de tensión LM317 y las resistencias de ajuste. La introduión del regulador LM317 en nuestro proyeto surge tras la imposibilidad de la plaa Arduino para alimentar,reordemos que esta plaa puede suministrar un máximo de 500 mA, todos los sensores y atuadores que hasta el momento estaban siendo alimentados por ella. Para soluionar el problema menionado se deidió agregar otra batería de 6V (1,5V de ada pila x 4),a que ya usábamos para alimentar Arduino. Esta nueva fuente alimentaría los ultrasonidos y el módulo de reepión de radiofreuenia, ambos, omo la mayoría de los dispositivos eletrónios, on un volta je reomendado de 5V. Para la obtenión de 5V a través de la fuente de 6V senillamente se tuvo que aondiionar el regulador LM317 on las resistenias adeuadas omo muestra la siguiente figura. El circuito usado es análogo pero prescindiendo del condensador dada la gran estabilidad de los 6V de la fuente de tensión.
![regulador de tensión LM317](./images/circuits/LM317.png)

## CONTROL REMOTO
Compuesto por:
+ Interruptor triestado
+ Arduino Uno
+ Transmisor RF
+ Cableado
+ Antena
+ Switches
+ Resistencias

Usaremos esta unidad para ontrolar tanto el modo de funionamiento, omo los movimientos,dentro del modo manual,del robot. Ofreeremos tres modos de funionamiento:
+ **Modo Parada**: El robot no realizará tarea alguna y permaneerá a la espera de un ambio de modo onsumiendo la mínima energía.
+ **Modo Movimiento automátio**: El robot omenzará a moverse por el espaio atendiendo a sus sensores de ultrasonidos para evitar olisiones mientras aspira.
+ **Modo Movimiento manual**: El usuario puede ontrolar los movimientos del robot mediante los botones del módulo de ontrol remoto.
