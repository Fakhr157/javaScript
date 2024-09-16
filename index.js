var element;

// element = document.body;
// element = document.links;
// element = document.images;
// element = document.all[19];
// element=document.URL;
// element=document.doctype;
// element = document.getElementsByTagName("div")[3];
// element = document.getElementsByClassName("top-header");
document.getElementById("top").onclick=xyz;
function xyz(){
    document.getElementById("top").style.backgroundColor = "green";
}
document.getElementById("top").onclick= abc;
function abc(){
    document.getElementById("top").style.backgroundColor = "blue";
}

// element=document.getElementsByTagName("div")[0].onclick=xyz;
// function xyz(){
//     document.getElementById("top").style.backgroundColor = "red";
// };

element=document.getElementsByTagName("div")[0].onclick=yellow;
function yellow(){
    document.getElementById("top").style.backgroundColor = "yellow";
};

element=document.getElementsByTagName("div")[0].onclick=white;
function white(){
    document.getElementById("top").style.backgroundColor = "white";
};

element=document.getElementsByTagName("div")[0].onclick=gray;

function gray(){
   let byId =  document.getElementById("top");
    console.log(byId)
   let byTagName = document.getElementsByName("header");
   console.log(byTagName[1])
};


element=document.getElementsByTagName("div")[0].onclick=tan;
function tan(){
    document.getElementById("top").style.backgroundColor = "tan";
};

element=document.getElementsByTagName("div")[0].onclick=brown;
function brown(){
    document.getElementById("top").style.backgroundColor = "brown";
};

element=document.getElementsByTagName("div")[0].onclick=pink;
function pink(){
    document.getElementById("top").style.backgroundColor="pink";
};


document.getElementById("top").addEventListener("click",red);
document.getElementById("top").addEventListener("click",function(){
 this.style.border="10px solid black";
});

// function addBorder(){
// let ele = document.getElementById('testerDiv').backgroundColor ="black";

// }

function addBorder() {
    let ele = document.getElementById('testerDiv');
    ele.style.border="1px solid black"; 
    ele.style.borderRadius = '50px';
    ele.style.color="green";

    // Correct spelling and usage of style property
}

function removeBorder() {
    let ele = document.getElementById('testerDiv');
    ele.style.border="none"; // Correct spelling and usage of style property
}

function red(){
    document.getElementById("top").style.background ="red";
};
element=document.getElementsByClassName('top-header');
element[0].innerHTML="<div>My name is Fakhar</div>";
console.log(element)

// element.document.getElementById("top")
// element.style.addclassList=xyz;
// console.log(element);

element=document.getElementById("top");
element.classList.add("abc,xyz");

// // element.style
// console.log(element)

element=document.getElementById("top");
// element.classList.length;
// console.log(element.classList.length)

element=document.getElementById("test");

// let singleclass=classlist[1];
// console.log(singleclass)
element.classList.add("def","ghq");
// element.classList.length;
let classlist = element.classList;


// element=document.getElementById("test");
element.classList.remove("abc");
element.classList = "rayyan"


let innerHtml=element.innerHTML;
let style=element.style
let tagname="DIV"
element.getAttributetes
// let Attributes = elements.attriutes;
// let attributes=element.getAttributeNames()

// attributes.setAttribute("class","def")
// console.log(attributes)


// element.innerHTML;
// element.classList;
// element.anchorTag;
// element.innerText;
// element=document.getElementById("test");
 //element=document.getElementsByName("header");
//  console.log(element[0].attributes[0])

//element=document.getElementsByTagName("p");

//console.log(element[0].attributes.id)

// console.log(element[1].attributes[2])
// element.innerText="Where are you"
// element.innerHTML="<div>Where are you from</div>";
// element.getAttribute;
// element.setAttribute("name","address")

element=document.getElementById("main").parentElement;
console.log(element)