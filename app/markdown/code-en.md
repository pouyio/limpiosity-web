# CODE
In this section you will find a brief summary of how all the programming was structured and why. All the files are uploaded in a Github repo which you can check for more detail, fork and work on your own.
[![github](../images/code/github.png)](https://github.com/pouyio/limpiosity)

## OBJECT-ORIENTED PROGRAMMING
The [Object-oriented programming](hthttps://en.wikipedia.org/wiki/Object-oriented_programming) or OOP, is a programming paradigm based on the concept of *"objects"* and let us build more efficient programs and in a very clear way. This way we get a short main loop with not many lines of code, based on creating objects and modifying their attributes using methods. Maybe in this project was not totally necessary the building of our own libraries, but as taking into account that one of our main goals was learn, we chose that method and applying it in a real world project. Language chosen was *C++*.

## LIBRARIES
Arduino platform is well known for the big amount of libraries existing available to achieve the manage of many sensors. However sometimes some more concrete features are needed and those libraries can not supply them. That is why we built some of those libraries to make it easier the reading and using of the program by other people with different grades of knowledge when it comes to programming.

To use an Arduino library it is needed to create a header file with extension `.h` where all the class names, attributes and methods are listed and a `.cpp` file where all those functions are written. We built three libraries for this project:
+ **Motor**: In charge of making the motors spin in a specific direction and time.
+ **Piezo**: In charge of generating all the sounds and tunes.
+ **Ultrasounds**: It manages the minimum distance to make a decission as well as the evaluation of the real distance to the object.

##  INTERRUPTS PROGRAMMING
The use of interrupts in microcontrollers is a widely used resource in very diverse scenarios such as the execution of a critic event subroutine, *Timer* events or the attention of real time process.

In our case we used interrupts to complete tasks depending on infrequent variations of some values like light intensity through the *LDR*. It is obvious that the illumination of the robot workspace will not suffer rapid changes that is the reason why reading the LDR value constantly would be a *waste* of time and computer power.

That brought us to create a conditioning circuit for the LDR, explained in the [circuits](./circuits.html) section. The logic output from this circuit will summon the interruption that will manage all the LEDs. Arduino counts with a great set of interruption functions to call and configure them. In this case we only had to add this chunk of code to our main loop:
```C++
attahInterrupt(0 ,LDRUP,CHANGE );
```
Where the first parameter,`0` , means the interruption pin, the second, `LDRUP` , means the interruption routine to execute and the last parameter, `CHANGE` , indicates the type of event that will call the interruption. In the next lines are written an example of programming with interruptions:

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

## REMOTE CONTROL
### Automatic mode
Automatic mode is enabled and disabled within the remote. This method is based on the detection of obstacles thanks to ultrasonic sensors the robot has on its front. The robot plays a tune when it is first turned on and starts moving in a straight line until it detects an obstacle. Depending on the sensor that detects the object, the robot makes a specific movement:
+ **Detection on the left sensor**: The robot stops and turn 60º aprox to the right and will continue in a straight line.
+ **Detection on the right sensor**: The robot stops and turn 60º aprox to the left and will continue in a straight line.
+ **Detection on left and right sensors**: In this case the robot must be in a corner so it will turn something more than 180º.
+ **Three sensors detection at the same time**: The robot will stop and turn 180º, suposing it is in front of a pet or a person.

### Manual mode
Manual mode is done through the remote which has several buttons to move the robot in all directions. It also has a button to make the buzzer sound and the same time that the leds are turned on.
