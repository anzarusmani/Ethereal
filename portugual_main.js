
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.className);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var cartCount = document.getElementById("cartCount");
  var count = parseInt(cartCount.innerText) + 1;
  cartCount.innerText = count;

  var draggedButton = document.querySelector("." + data); // Get the dragged button
  var correspondingInfoCard = draggedButton.nextElementSibling; // Get the corresponding info card

  event.target.appendChild(draggedButton);
  correspondingInfoCard.style.display = "none"; 
}



function showInfo(button) {
  var infoCard = button.nextElementSibling;
  infoCard.style.display = 'block';
}

function hideInfo(button) {
  var infoCard = button.nextElementSibling;
  infoCard.style.display = 'none';
}


