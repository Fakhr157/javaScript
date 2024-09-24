// element=document.getElementById("september").previousElementSibling;
// element.innerText="kjdjljvjz"
// element.style.background = "red";
// // console.log(element)


// element = document.getElementById("september").nextElementSibling;
// element.innerHTML="<h2>Hello World</h2>"
// element.style.background="green"
// element.style.color="red"
// // console.log(element)

// element = document.getElementById("original").nextElementSibling;
// console.log(element)
 
function nextChild(){
    let element = document.getElementById("september").nextElementSibling;
    element.innerText = "Hi how are you"
    console.log(element)
    
}

function prevChild(){
    let element = document.getElementById("Provident").previousElementSibling;
    element.innerHTML = "<h2>Hi this is me Fakhre Alam</h2>"
    element.style.background= "tan"
    console.log(element)
}