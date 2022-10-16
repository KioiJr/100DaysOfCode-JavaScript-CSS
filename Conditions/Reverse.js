let num1 = 12345;
let num2 = 0;

while(num2>0)
{
    console.log(num1*Math.sign(num2))
    num2 = parseInt(num1/10)

}