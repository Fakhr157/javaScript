
var form = document.getElementById("form");



function onSubmit(event) {
    event.preventDefault();
    let myData = {};
    myData.firstname = document.getElementById("first").value;
    myData.lastname = document.getElementById("last").value;
    myData.address = document.getElementById("address").value;
    myData.conatct = document.getElementById("conatct").value;
    myData.email = document.getElementById("email").value;
    myData.password = document.getElementById("password").value;
    myData.confirmPassword = document.getElementById("confirmPassword").value;
    myData.english = document.getElementById("english").checked;
    myData.pushto = document.getElementById("urdu").checked;
    myData.urdu = document.getElementById("pushto").checked;
    myData.male = document.getElementById("male").checked;
    myData.female = document.getElementById("female").checked;
    myData.dropdown = document.getElementById("dropdown").value;
    myData.comments = document.getElementById('comments').value.trim();
    console.log(myData);
}

function resetsss(){
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("address").value = "";
    document.getElementById("conatct").value = "";
    document.getElementById("email").value = "";
}

function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('eye-slash');
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; 
       toggleButton.classList.add("fa-regular","fa-eye");
    } else {
        passwordField.type = 'password'; 
       toggleButton.classList.remove("fa-regular","fa-eye");

    }
}

function testResults(){
   let passingmarks = document.getElementById("resultnumbers").value;
    console.log(passingmarks);

    if (passingmarks>33){
        console.log("pass")
    }
    else{
        console.log("fail")
    }
}

function agecomparison(){
    let age = document.getElementById("agecomparison").value;
    console.log("age");

    if(age>18){
    console.log("eligible to vote")
    }else if(age<10){
        console.log("baby Child")
       
    }else
    console.log("young child")
}


// let fakhir ={name: "Fakhir", age:20 , email: "fakhir@gmail.com" , gender: "male"}
// console.log(fakhir)