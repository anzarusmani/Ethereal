function showInfo(button) {
  var infoCard = button.nextElementSibling;
  infoCard.style.display = 'block';
}

function hideInfo(button) {
  var infoCard = button.nextElementSibling;
  infoCard.style.display = 'none';
}


function drag(event) {
  event.dataTransfer.setData("text", event.target.className);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var className = event.dataTransfer.getData("text");
  var button = document.querySelector("." + className);
  
  // Add your logic to handle the dropped button, e.g., saving it to the cart
  // You can modify the cart icon or perform any other necessary actions here
  
  // Example: Add the button's class name to the cart element
  var cart = document.querySelector(".cart-dropzone");
  cart.textContent = className;
}
