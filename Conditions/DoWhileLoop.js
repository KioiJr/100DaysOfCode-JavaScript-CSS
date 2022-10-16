// First executes, then checks the condition. Even if the condition is false, it executes once then stops.

let i =10;

do{
    console.log("Hello", i);
    i--;
}
while(i>0)