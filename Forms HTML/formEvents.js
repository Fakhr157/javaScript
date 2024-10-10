

function focusfunction(element){
    element.style.background ="lime";
}

function blurFunction(element){
    element.style.background ="";
}

function inputfunction(element){
   var x = element.value;
   document.getElementById("test").innerHTML= x;
}

function changeFunction(element){
    // var x = element.value;
    // document.getElementById("test").innerHTML=x;

}

function selectfunction(){
    console.log("You selected some text");
}