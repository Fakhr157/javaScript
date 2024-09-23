function addName() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  const fullName = `${firsName} $ {LastName}`;
  const li = document.createElement("li");
  li.textcontent = fullName;
  document.getElementById("nameList").appendChild(li);
  // let input = document.getElementById("firstname");
  // let li = document.createElement("input");
  // li.appendChild(document.createTextNode(input));
  // li.value = input.value
  // ul.appendChild(li);
  // input.value='';
  // //document.getElementById("input").value;
}
