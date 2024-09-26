function changeabc() {
  var element = document.getElementById("Provident");
  var elementfirstChild = element.children[0];
  elementfirstChild.setAttribute("src", "image/1.jpg");
  console.log(elementfirstChild);

  var elementsecChild = element.children[1];

  //   element.children[1].childNodes[5].innerText="Eassy Pyments";
  //   console.log(element.children[1].children);
  var description = elementsecChild.getElementsByClassName("desc")[0];
  description.innerText = "Eassy Pyments";
  console.log(description);
}
