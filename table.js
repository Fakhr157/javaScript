function addnewrow(){
    var parentelement = document.getElementById("addnewrow");
    var childelement = document.createElement("tr");
   
    var city = document.getElementById("city");
    var customername = document.getElementById("customername");
    var SNo = document.getElementById("SNo");
    
    childelement.innerHTML = "<td>"+ SNo.value+"</td><td>"+ customername.value+"</td><td>"+city.value+"</td>"; 
    parentelement.appendChild(childelement);
}