// function addnewrow(){
//     var parentelement = document.getElementById("addnewrow");
//     var childelement = document.createElement("tr");
   
//     var city = document.getElementById("city");
//     var customername = document.getElementById("customername");
//     var SNo = document.getElementById("SNo");
    
//     childelement.innerHTML = "<td>"+ SNo.value+"</td><td>"+ customername.value+"</td><td>"+city.value+"</td>"; 
//     parentelement.appendChild(childelement);
// }

function secondtable(){
    console.log("function call")
var parentelement = document.getElementById("secondtable")
var childelement = document.createElement("tr");

var name = document.getElementById("name");
var age = document.getElementById("age");
var address = document.getElementById("address");
var  city = document.getElementById("city")

childelement.innerHTML = "<td>"+ name.value +"</td><td>"+ age.value+"</td><td>" + address.value +"</td><td>" + city.value + "</td>";
parentelement.appendChild(childelement)
name.value = "";
age.value = "";
address.value = "";
city.value = "";
}