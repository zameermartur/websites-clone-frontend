//control statements 

let animal="momkey"
if(animal==="cat")
{
    console.log("cat sounds bow")
}
else if(animal==="dog"){
    console.log("cat sounds meow")
}
else{
    console.log("momkey is mad")
}

let signal="green"
if(signal==="green")
{   
    let pedesterians=true
    if(pedesterians){
        console.log("hold on");
    }
    else{
    console.log("go on");
    }
}
else if(signal===red)
{
    console.log("stop");
}
else{
    console.log("ready to go");
}



//assignment ifelseif

let icecream = "cup"
let flavour = "vanilla"
if(icecream==="cup")
{
    console.log("cup-icecream")
    if(flavour==="vanilla")
    {
        console.log("vanilla flavour")
        console.log("price:20rs")
    }
    else if(flavour==="choclate")
    {
        console.log("choclate flavour")
        console.log("price:30rs")
    }
    else if(flavour==="strawberry")
    {
        console.log("strawberry flavour")
        console.log("price:40rs")
    }
    else{
        console.log("Out of Stock")
    }
} 
else if(icecream==="kulfi"){
    console.log("kulfi icecream")
  
    if(flavour==="pista badam")
    {
        console.log("pista badam flavour")
        console.log("price:40rs")
    }
    else if(flavour==="mangoblast")
    {
        console.log("mangoblast flavour")
        console.log("price:30rs")
    }
    else if(flavour==="blueberry")
    {
        console.log("blueberry flavour")
        console.log("price:50rs")
    }
    else{
        console.log("Out of Stock")
    }
} 

else if(icecream==="cone"){
    console.log("cone icecream")
  
    if(flavour==="chocobar")
    {
        console.log("chocobar flavour")
        console.log("price:50rs")
    }
    else if(flavour==="mango")
    {
        console.log("mango flavour")
        console.log("price:30rs")
    }
    else if(flavour==="fruit and nut")
    {
        console.log("fruit and nut flavour")
        console.log("price:60rs")
    }
    else{
        console.log("Out of Stock")
    }
        
}
else if(icecream==="Familypack"){
    console.log("Familypack icecream")
  
    if(flavour==="butterscotch")
    {
        console.log("butterscotch flavour")
        console.log("price:40rs")
    }
    else if(flavour==="vanilla")
    {
        console.log("vanilla flavour")
        console.log("price:30rs")
    }
    else if(flavour==="blueberry")
    {
        console.log("blueberry flavour")
        console.log("price:40rs")
    }
    else{
        console.log("Out of Stock")
    }
}
else{
    console.log("this type of icecreams not available")
}


// switch
let color="red"
switch(color){
    case "red" : console.log("the color is red");
    break
    case "blue": console.log("the color is blue");
    break
    case "green": console.log("the color is green");
    break
    case "black": console.log("the color is black");
    break
    default: console.log("no matching color found");
}





//looping statements
for(let i=1; i<=5; i++){
    console.log(i);
}
for(let i=5; i>=1; i--){
    console.log(i);
}


let sum=0
for( let i=7; i<=17; i++){
    sum=sum +i
}
console.log(sum)

let prod=1
for( let i=5; i<=10; i++){
    prod=prod*i
}
console.log(prod);

let sum3=0
for( let i=1; i<=10; i++){
    sum3=sum3+i
}
console.log(sum3);





//functions 
//general 
function addTwoNum(a,b){
return(a+b)
}
console.log(addTwoNum(3,2));


function zameer(a,b){
    if(a>b){
        console.log("a is greater");
        return(a)
    }
  
    else{
        console.log("b is greater");
        return(b)
    }
    
}
let result=zameer(2, 5)
console.log(result);


function avg(a,b,c,d,e){
    return (a+b+c+d+e)/5
}
console.log(avg(5,10,15,20,25));



//anonymous
let a = function(a , b){
    return a+b
}
console.log(a(1 ,4));

//arrow
let z = (a , b)=>{
    return a+b
}
console.log(z(1 ,6));







//objects

let car ={
    color:"yellow",
    brand:"rollsroyce",
    model:"phantom",
    start: function(){
        return "turn on" + this.model
    }
}
console.log(car);

//modifications of object
//how to access object properties
console.log("zameer is driving"  + car.model);

// updating properties of object
car.color="red"
console.log(car);

// adding properties to object
car.price=11000000
console.log(car);

// deleting properties of object
delete car.color
console.log(car);









// document.getElementbyId()
let x=document.getElementById("welcome")
console.log(x);
console.log(typeof x);
 

// x.style.color="purple"

x.setAttribute("title" , "welcome to js")

x.classList.add("abc")

// x.innerText="HELLO WORLD"

x.innerHTML="<p>zzzzzzzzzzzz</p>"


//short to write css prop at once
x.style.cssText="color:green; font-family:calibri"