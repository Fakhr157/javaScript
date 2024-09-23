function todo(){
    let ul = document.getElementById("todo");
    let input = document.getElementById("firstname");
    let li = document.createElement("input");
    // li.appendChild(document.createTextNode(input));
    li.value = input.value
    ul.appendChild(li);
    input.value='';
    //document.getElementById("input").value;
}


