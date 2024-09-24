var element;

element = document.getElementById("def").parentElement;
element.style.background = "red"
 element.style.border = "2px solid black"
 element.innerText.fontsizw = "20px"
// console.log(element)

element = document.getElementById("Flaxable").children;
element[1].innerText="Eassy Pyments"
// console.log(element[1].innerText)


// element = document.getElementById("member").firstElementChild;
// console.log(element)

element=document.getElementById("order").firstChildElement;
// console.log(element)

// element = document.getElementById("women").children;
// console.log(element)


element = document.getElementById("jacket").lastElementChild;
// console.log(element)

let casualelment = document.getElementById("casual").lastElementChild;
// console.log(casualelement)


let casualelement = document.getElementById("jacket").firstChild;
// console.log(casualelement)

// let active= document.getElementById("active").firstChild;
// console.log(active)

let active = document.getElementById("active").lastChild;
// console.log(active)

element=document.getElementById("september").previousElementSibling;
element.innerText="kjdjljvjz"
element.style.background = "red";
// console.log(element)


element = document.getElementById("september").nextElementSibling;
element.innerHTML="<h2>Hello World</h2>"
element.innerText="Hi how are you"
element.style.background="green"
element.style.color="red"
// console.log(element)

element = document.getElementById("original").nextElementSibling;
console.log(element)