// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just a text");

// newElement.appendChild(newText)

// var target = document.getElementById("test")
// target.insertAdjacentElement("beforeBegin", newElement)
// target.insertAdjacentElement("beforeEnd", newElement)
// target.insertAdjacentElement("afterBegin", newElement)

// var newtext= "This is Heading"

// target.insertAdjacentText("afterbegin",newtext)
// var target = document.getElementById("test")
// var newtext = "This is Just Text";
// target.insertAdjacentText("beforeend", newtext);

// var target= document.getElementById("content")

// var newtext = "<h2>This is content</h2>"

// target.insertAdjacentHTML("beforeend",newtext )


// var target = document.getElementById("content");

// var newText = "this is just text";
// target.insertAdjacentText("afterEnd", newText);

var target = document.getElementById("content");
var newtext = "<h1>this is just text</h1>";

target.insertAdjacentHTML("Beforeend", newtext)