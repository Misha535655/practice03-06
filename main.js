document.querySelector("body").addEventListener("click", clickHendler);
function clickHendler(event) {
  if(!event.target.hasAttribute("editable")) return;

  event.preventDefault();
  const { target: targetElement} = event
  const type = targetElement.getAttribute("editable");
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", type);
  targetElement.parentNode.appendChild(inputElement);
  inputElement.value = targetElement.innerText;
  targetElement.remove();
  inputElement.select();

  inputElement.addEventListener("keyup", function (event) {
    switch (event.which) {
      case 13: inputElement.parentNode.appendChild(targetElement);
               targetElement.innerText = this.value;
               inputElement.remove();
       break;
      case 27: inputElement.parentNode.appendChild(targetElement);
               inputElement.remove();

      break;
    }

  });

}
