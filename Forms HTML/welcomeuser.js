function welcomeTheUser(){
    let parentelement= document.getElementById("welcome-message")
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let childelement = document.createElement("h1");
    let fullname = firstname.value + " " + lastname.value;
    childelement.innerText = fullname;
  // parentelement.appendChild(childelement);
   parentelement.append(childelement);

   firstname.value='';
   lastname.value='';
  
}

// function welcomeTheUseddddr(){
//     let parentelement = document.getElementById("welcome-message")
//     let firstname = document.getElementById("firstname")
//     let lastname = document.getElementById("last")

// }