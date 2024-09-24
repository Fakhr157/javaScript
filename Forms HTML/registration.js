
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
    console.log(myData);

}

function resetsss(){
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("address").value = "";
    document.getElementById("conatct").value = "";
    document.getElementById("email").value = "";
}


// let fakhir ={name: "Fakhir", age:20 , email: "fakhir@gmail.com" , gender: "male"}
// console.log(fakhir)