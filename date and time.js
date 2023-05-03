let date = new Date()
console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.toLocaleDateString());


// related time
let time =new Date()
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());
console.log(time.toLocaleTimeString());

// template iterals and alert
let x =1
let y = 2
let sum = x+y
alert(`the sum 0f ${x} and ${y} is ${sum}`);

// prompt
let names = prompt("enter your name")
let num = prompt (`hi hello ${names} enter your num`);
alert(` ${names} your num is ${num}`)



// realtime clock
setInterval(function(){
    let digitalclock = document.getElementById("clock")
    console.log(digitalclock);
    digitalclock.innerText = new Date().toLocaleTimeString()
})