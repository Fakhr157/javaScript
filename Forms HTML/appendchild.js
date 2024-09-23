

// var newelement = document.createElement("h2");

// var newtext = document.createTextNode("This is  just a test");


// newelement.appendChild(newtext);

// document.getElementById("test").appendChild(newelement);

// console.log(newelement)

// console.log(newtext)


// var newelement= document.createElement("h2");

// var newtext= document.createTextNode("Hello how are you");

// newelement.appendChild(newtext);

// document.getElementById("test").appendChild(newelement)

// console.log(newelement)

// var newelement = document.createElement("div");

// var newtext = document.createTextNode("Hello World");

// newelement.appendChild(newtext)

// document.getElementById("test").appendChild(newelement)

// // console.log(nweelement)
// console.log(newelement)

// var newelement= document.createElement("p");

// var newText = document.createTextNode("I am doing Practice")

// newelement.appendChild(newText)

// console.log(newelement)

// document.getElementById("test").appendChild(newelement)
// console.log(new

var newelement = document.createElement("h1")

var newtext = document.createTextNode("I am learning Javascript")

newelement.appendChild(newtext)

document.getElementById("test").appendChild(newelement)

var newComment = document.createComment("This is just Comment")

document.getElementById("test").appendChild(newComment)

  var target = document.getElementById("test")
// target.insertBefore(newelement,target.childNodes[0])

target.insertBefore(newelement,target.childNodes[0])

console.log(newComment)
console.log(newelement)
console.log(newtext)

