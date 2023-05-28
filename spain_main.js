function showInfo(button) {
  var infoCard = button.nextElementSibling;
  infoCard.style.display = 'block';
}

function hideInfo(button) {
  var infoCard = button.nextElementSibling;
  infoCard.style.display = 'none';
}





function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.className);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const draggedItemClass = event.dataTransfer.getData('text/plain');
  const draggedItem = document.querySelector(`.${draggedItemClass}`);
  event.target.appendChild(draggedItem);
  const cartCount = document.querySelector('#cartCount');
  cartCount.textContent = event.target.childElementCount;
}