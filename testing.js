//var name = prompt("hii the");
function enterName(name){
    console.log("inside enter name function",name);
    return "hii there "+name;
}
//console.log(name);
//document.getElementById("sometext").innerHTML= enterName(name);
var r=1;
var fruit="banana";
console.log(fruit);
console.log(fruit.toUpperCase())
console.log(fruit.slice(2,5));
console.log(fruit.replace("nan","123"))
fruit=fruit.replace("nana","1234");
console.log(fruit.split(""))
console.log(fruit.length)
var fruit=["apple", "banana","pineapple","kivy"];
console.log(fruit.toString());
console.log(fruit.join(" - "));

for(var i=0;i<fruit.length;i++){
   // alert(fruit[i]);
}
function func1(name, age, height, weight){
    var person={
        name: name,
        age:age,
        height:height,
        weight:weight,
        student_name: function(){
            return name+ " "+ age;
        }
    }
    return person;
}
var person = func1("shashwat",24,160,65);
console.log(person.age);
console.log(person.name); 
console.log(person.student_name());

