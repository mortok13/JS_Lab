var time;
var name;
var password1 = 333;
var password2 = 666;
var password3 = 0000;
var username1 = "ivan";
var username2 = "ssss";
var username3 = "gibs";
var passwordcheck, usernamecheck;
var num1,num2,num3;

time=prompt("enter your time:");
while(time>24||time<0) {
    alert("please, enter valid number.");
    time=prompt("enter your time:");
}
 if(time>17){ 
    alert("Good evening!");
}else{
    alert("Good day!");
}

//////////////////2

name=prompt("enter your name:");
if (name == "Jonh"||name == "jonh" ){
    alert("Hello, Jonh");
} else {
alert(name + " go away!");
}

/////////////////3

usernamecheck=prompt("enter your username: ");
if(usernamecheck!=username1)
{
    console.log(username1)
    // while(usernamecheck!=username1||usernamecheck!=username2||usernamecheck!=username3)
    // {
    //     usernamecheck=prompt("you wrote incorrect login, please try again!");
    // }
}


passwordcheck = prompt("enter your password: ");

if (usernamecheck == username1 && passwordcheck == password1){
    alert("Welcome!");
} else if(usernamecheck == username2 && passwordcheck == password2)
{
    alert("Welcome!");
} else if(usernamecheck == username3 && passwordcheck == password3)
{
    alert("Welcome!");
}else
{
alert("user is not finded!");
}

/////////////////////// 4

num1=prompt("Enter first number: ");
num2=prompt("Enter second number: ");
num3=prompt("Enter third number: ");


if(num1>num2 && num1>num3)
{
alert("First number is the bigest one!")
}
if(num2>num1 && num2>num3)
{
alert("Second number is the bigest one!")
}
if(num3>num2 && num3>num1)
{
alert("Third number is the bigest one!")
}else if(num1==num2) //случай, когда два числа одинаковые
{
if(num1>num3)
{
    alert("First and second number is the bigest!")
}
}else if(num1==num3)
{
if(num1>num2)
{
    alert("First and third number is the bigest!")
}
}else if(num2==num3)
{
if(num3>num1)
{
    alert("Second and third number is the bigest!")
}
}else //случай, когда все 3 одинаковые
{
alert("you enter 3 identical number.")
}