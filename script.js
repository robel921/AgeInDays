// Challenge 1 your age in days

function ageInDays(){
    var birthYear = prompt("what year were you born ?");
var currentYear = 2020;
var result = (currentYear-birthYear)*365;
var h1= document.createElement("h1");
var textField = document.createTextNode( "You are "+result+" days old");
h1.setAttribute('id','resultBox');
h1.appendChild(textField);
document.getElementById("result1").appendChild(h1);
//document.getElementById("result").innerHTML= "You are "+result+" days old";
//console.log("your are "+result+" days old");

}

function reset(){
    document.getElementById("resultBox").remove();
}


