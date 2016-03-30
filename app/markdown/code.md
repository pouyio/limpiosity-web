# CODE
En esta sección se hace un breve resumen de cómo se estructuró toda la programación y su por qué. Todos los archivos de código están almacenados en el repositorio de Limpiosity en Github al que puedes acceder para un mayor detalle.
[![github](../images/code/github.png)](https://github.com/pouyio/limpiosity)

## PROGRAMACIÓN ORIENTADA A OBJETOS
La Programaión Orienta a Ob jetos o POO, es un paradigma de programaión que nos permite diseñar programas más eientes y de manera más lara que utilizando estruturas o otro tipo de ténia. Conseguimos además que nuestro programa prinipal tenga muy poas líneas y se base en la reaión de los ob jetos, modi- aión de sus atributos y utilizaión de sus métodos.

Quizás en este proyeto no era del todo neesario la reaión de nuestras propias librerías on este método, pero a nivel de aprendiza je se ha optado por realizarlo de este modo y poder apliarlo a un proyeto real. El lengua je esogido ha sido C++.

## LIBRERÍAS
La plataforma Arduino se arateriza por la antidad de librerías disponibles que existen para realizar de manera muy senilla funiones que impliarían un mayor desarrollo. Sin embargo en oasiones se neesita alguna funión más espeía y no es posible implementarla de forma senilla. Es por ello que hemos reado algunas de estas librerías para failitar la letura y uso del programa por personas on diferentes onoimientos y niveles de programaión.

Para rear una librería en Arduino, es neesario rear una abeera, un arhivo de tipo .h donde se inluye el nombre de la lase, sus atributos y sus métodos y un arhivo .pp donde se desarrollan estas funiones que desarrolla el software. Se crearon tres librerías propias para el proyecto:
+ **Motor**: Encargada de hacer que los motores girasen en un sentido y tiempo determinado.
+ **Piezo**: Encargada de generar los tonos y melodías.
+ **Ultrasounds**: Controla tanto la distancia mínima de decisión de objetos, como la evaluación de esta distancia con la distancia rela al objeto.

##  PROGRAMACIÓN POR INTERRUPCIONES
El uso de interrupiones en miroontroladores es un reurso muy usado para diversos esenarios de traba jo omo por ejemplo la ejeuión de una subrutina de evento rítio,la temporizaión de eventos mediante Timers, la atenión de proesos en tiempo real.

En nuestro aso usaremos las interrupiones para la realizaión de tareas dependientes de mediiones de variaión infreuente,en onreto, la administraión de los LEDs de presenia a través de la medida de la LDR.Es evidente que la iluminaión en el ámbito de traba jo de nuestro proyeto no tendá ambios freuentes, omo muho, un ambio de habitaión o la aída de la nohe,es por esto, que la onstante mediión de la LDR para la administraión de los LEDs de presenia supondría un derrohe de operaiones y tiempo en términos de la omputaión o senillamente, una soluión poo elegante.

Es por ello que usaremos un iruito de aondiionamiento de la LDR,expliado en el apartado sobre la LDR, para obtener una salida lógia omo resultado de una variaión en la intensidad lumínia. Esta salida lógia provoará una interrupión uya rutina de interrupión será la administraión de los LEDs. Para la programaión de interrupiones Arduino uenta on funiones espeías de armado y onguraión de interrupiones.En nuestro aso sólo habremos de introduir el siguiente ódigo en el programa prinipal:
```C++
attahInterrupt(0 ,LDRUP,CHANGE );
```
Donde el primer parámetro,0, hae referenia al pin de interrupión,el segundo parámetro ,LDRUP,india la rutina de interrupión a ejeutar y el terer parámetro,CHANGE,india el tipo de evento que provoará la interrupión. A ontinuaión se muestra un ejemplo de programaión on uso de interrupiones:
```c
#include <iostream>

using namespace std;

int main()
{
   cout<<"¡Hola mundo!";
   return 0 ;
}
```
## MANDO A DISTANCIA
### Modo de control automático
El modo automátio se ativa y desativa desde el mando a distania. Este método se basa en la deteión de obstáulos graias a los sensores de ultrasonidos. El robot omienza on una melodía antes de iniiar este modo, tras el que omienza a moverse en línea reta hasta que uno de los tres sensores que están dispuestos deteta un obstáulo. Según el sensor que haya detetado este obstáulo, el ual estará a una distania menor o igual a 15 m, el robot realizará un movimiento u otro. Tenemos los siguientes modos:
+ **Deteión sensor izquierda**: El robot se parará y girará 60º aproximadamente haia la dereha y seguirá avanzando en línea reta.
+ **Deteión sensor dereha**: El robot se parará y girará 60º aproximadamente haia la izquierda y seguirá avanzando en línea reta.
+ **Deteión sensor izquierda** y dereha: En este supuesto, damos por heho que nos enontramos en una esquina, por lo que el robot girará algo más de 180º.
+ **Deteión de los tres sensores a la vez**: Suponemos que un obstáulo omo una masota o una persona se ha interpuesto en el amino. El robot parará y girará 180º.

### Modo de control manual
El modo de ontrol manual se realiza a través de un mando a distania, el ual dispone de unos botones para moverlo haia delante, y para girar sobre sí mismo a la izquierda o la dereha. También dispone de un botón para una boina, el ual suena al apretarlo mientras que a la vez se enienden los leds del robot.
