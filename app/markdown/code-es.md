# CÓDIGO
En esta sección se hace un breve resumen de cómo se estructuró toda la programación y su por qué. Todos los archivos de código están almacenados en el repositorio de Limpiosity en Github al que puedes acceder para un mayor detalle.
[![github](../images/code/github.png)](https://github.com/pouyio/limpiosity)

## PROGRAMACIÓN ORIENTADA A OBJETOS
La [Programación Orientada Objetos](https://es.wikipedia.org/wiki/Programación_orientada_a_objetos) o POO, es un paradigma de programación que nos permite diseñar programas más eficientes y de manera más clara que utilizando estructuras u otro tipo de técnica. Conseguimos además que nuestro programa principal tenga muy pocas líneas y se base en la creación de los objetos, modificación de sus atributos y utilización de sus métodos.

Quizás en este proyecto no era del todo necesario la creación de nuestras propias librerías con este método, pero a nivel de aprendizaje se ha optado por realizarlo de este modo y poder aplicarlo a un proyecto real. El lenguaje escogido ha sido *C++*.

## LIBRERÍAS
La plataforma Arduino se caracteriza por la cantidad de librerías disponibles que existen para realizar de manera muy sencilla funciones que implicarían un mayor desarrollo. Sin embargo en ocasiones se necesita alguna función más específica y no es posible implementarla de forma sencilla. Es por ello que hemos creado algunas de estas librerías para facilitar la lectura y uso del programa por personas con diferentes conocimientos y niveles de programación.

Para crear una librería en Arduino, es necesario crear una cabecera, un archivo de tipo `.h` donde se incluye el nombre de la clase, sus atributos y sus métodos y un archivo `.cpp` donde se desarrollan estas funciones. Se crearon tres librerías propias para el proyecto:
+ **Motor**: Encargada de hacer que los motores girasen en un sentido y tiempo determinado.
+ **Piezo**: Encargada de generar los tonos y melodías.
+ **Ultrasounds**: Controla tanto la distancia mínima de decisión de objetos, como la evaluación de esta distancia con la distancia real al objeto.

##  PROGRAMACIÓN POR INTERRUPCIONES
El uso de interrupciones en microcontroladores es un recurso muy usado para diversos escenarios de trabajo como por ejemplo la ejecución de una subrutina de evento crítico, la temporización de eventos mediante *Timers*, la atención de procesos en tiempo real.

En nuestro caso usaremos las interrupciones para la realización de tareas dependientes de mediciones de variación infrecuente, en concreto, la administración de los **LEDs de presencia** a través de la medida de la *LDR*. Es evidente que la iluminación en el ámbito de trabajo de nuestro proyecto no tendrá cambios frecuentes, como mucho, un cambio de habitación o la caída de la noche, es por esto, que la constante medición de la LDR para la administración de los LEDs de presencia supondría un *derroche* de operaciones y tiempo en términos de la computación o sencillamente, una solución poco elegante.

Es por ello que usaremos un circuito de acondicionamiento de la LDR, explicado en la sección sobre los [circuitos](./circuits.html), para obtener una salida lógica como resultado de una variación en la intensidad lumínica. Esta salida lógica provocará una interrupción cuya rutina de interrupción será la administración de los LEDs. Para la programación de interrupciones Arduino cuenta con funciones específicas de armado y configuración de interrupciones. En nuestro caso sólo habremos de introducir el siguiente código en el programa principal:
```C++
attahInterrupt(0 ,LDRUP,CHANGE );
```
Donde el primer parámetro,`0` , hace referencia al pin de interrupción,el segundo parámetro ,`LDRUP` ,indica la rutina de interrupción a ejecutar y el tercer parámetro,`CHANGE` ,indica el tipo de evento que provocará la interrupción. A continuaión se muestra un ejemplo de programación on uso de interrupciones:

```c
void setup() {
  pinMode(2, INPUT);
  pinMode(13, OUTPUT);
  pinMode(8, OUTPUT);
  attahInterrupt(0, LDRUP, CHANGE);
}

void loop() {
  digitalWrite(8, HIGH);
  delay(500);
  digitalWrite(8, LOW);
  delay(500);
}

void LDRUP() {
  if(digitalRead(2) == 0){
    digitalWrite(13, LOW);
  if(digitalRead(2) == 1){
    digitalWrite(13, HIGH);
  }
}
```

## MANDO A DISTANCIA
### Modo de control automático
El modo automático se activa y desactiva desde el mando a distancia. Este método se basa en la detección de obstáculos gracias a los sensores ultrasonidos. El robot comienza con una melodía antes de iniciar este modo, tras el que comienza a moverse en línea recta hasta que uno de los tres sensores que están dispuestos detecta un obstáculo. Según el sensor que haya detectado este obstáculo, el cual estará a una distancia menor o igual a 15cm, el robot realizará un movimiento u otro. Tenemos los siguientes modos:
+ **Detección sensor izquierda**: El robot se parará y girará 60º aproximadamente hacia la derecha y seguirá avanzando en línea reta.
+ **Detección sensor derecha**: El robot se parará y girará 60º aproximadamente hacia la izquierda y seguirá avanzando en línea reta.
+ **Detección sensor izquierda y derecha**: En este supuesto, damos por hecho que nos encontramos en una esquina, por lo que el robot girará algo más de 180º.
+ **Detección de los tres sensores a la vez**: Suponemos que un obstáculo como una mascota o una persona se ha interpuesto en el camino. El robot parará y girará 180º.

### Modo de control manual
El modo de control manual se realiza a través de un mando a distancia, el cual dispone de unos botones para moverlo hacia delante, y para girar sobre sí mismo a la izquierda o la derecha. También dispone de un botón para una bocina, el cual suena al apretarlo mientras que a la vez se encienden los leds del robot.
