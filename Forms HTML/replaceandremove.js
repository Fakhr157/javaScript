


// var newElement = document.createElement("li");

// var newText = document.createTextNode("Wow new Text");
// newElement.appendChild(newText);

// var target = document.getElementById("list");

// var oldElement = target.children[2];

// // console.log(oldElement);

// target.replaceChild(newElement,oldElement);

// var newelement = document.createElement("li");


// var newText = document.createTextNode("This is Just Text");

// newelement.appendChild(newText);

// var target = document.getElementById("list");
// var oldElement = target.children[3];
// console.log(oldElement)

// target.replaceChild(newelement,oldElement)

// var newelement = document.createElement("p");
// var newtext = document.createTextNode(" Hello, This is me Fakhre alam, Ia am learning javascript");
// newelement.appendChild(newtext);

var target = document.getElementById("dummy")
var oldelement = target.children[0];
// console.log(oldelement)

target.replaceChild(newelement,oldelement);


// function addnewelement() {
//     var parentelement = document.getElementById("ABC");
//     var newelementtext = document.getElementById("XYZ");
//     var childelement = document.createElement("li");
//     childelement.innerHTML = '<span class="xyz">'+newelementtext.value;
//     parentelement.appendChild(childelement);
//     newelementtext.value = "";

// }


// function addnewelement(){
//     var parentelement= document.getElementById("ABC");
//     var newelementtext = document.getElementById("XYZ");
//     var childelement = document.createElement("li");
//     childelement.innerHTML= newelementtext.value;
//     parentelement.appendChild(childelement);
//     newelementtext.value = "";
    
// }

// var target = document.getElementById("list");
// var oldelement = target.children[0];

// target.removeChild(oldelement);
// var target = document.getElementById("list");

// var newelement = document.createElement("li");
// newelement.innerHTML = "Mango"
// target.appendChild(newelement);

var target = document.getElementById("list");

var newelement = document.createElement("li");
newelement.innerText= "Guava"
target.appendChild(newelement);

var target = document.getElementById("list");
var newelement = document.createElement("li")
newelement.innerHTML = "Pinapple";
target.appendChild(newelement)


var target = document.getElementById("list");

var oldElement = target.children[0];

target.removeChild(oldElement);


var target = document.getElementById("list")

var oldElement = target.children[0];
target.removeChild(oldElement)

var target =document.getElementById("list")

var oldelement = target.children[0];

target.removeChild(oldelement)