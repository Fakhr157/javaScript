function createabc(){
var display = document.getElementById("displayElement")
var newelement = document.createElement("p")
console.log(newelement)
var newtext = document.createTextNode("Hello World How are You I am Fakhre Alam");
console.log(newtext)
newelement.appendChild(newtext)
display.appendChild(newelement)
}