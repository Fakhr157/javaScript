function changeabc() {
  var element = document.getElementById("Provident");
  console.log(element)
  var elementfirstChild = element.children[0];
  elementfirstChild.setAttribute("src", "image/1.jpg");

  var elementsecChild = element.children[1];

  var description = elementsecChild.getElementsByClassName("desc")[0];
  description.innerText = "Eassy Pyments";
  console.log(description);
}
