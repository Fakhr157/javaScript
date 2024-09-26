// var element;

//
//
// element = document.all[19];
// element = document.doctype;
// element = document.getElementsByClassName("top-header");

function targetBody() {
  let element = document.body;
  console.log(element);
}

function targetlinks() {
  let element = document.links;
  console.log(element);
}

function targetimages() {
  let element = document.images;
  console.log(element);
}

function targeturl() {
  var element = document.URL;
  console.log(element);
}

function targetelementtag() {
  let element = document.getElementsByTagName("div")[4];
  console.log(element.children[0]);

  console.log(element.getElementsByTagName("button"));
}

function targetelementclass() {
  let element = document.getElementsByClassName("top-header");
  console.log(element);

}
