

var id = setTimeout(function(){
    var target = document.getElementById("test");
    target.style.width = "500px";
},3000);


function Anim(){
    
}

function stopAnimation(){
 clearTimeout(id);
}