
function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.className);
    const item = event.target;
    const priceElement = item.nextElementSibling.querySelector("p");
    const priceText = priceElement.textContent.trim();
    const currencyRegex = /(\$[\d.,]+)/;
    const heading = item.nextElementSibling.querySelector("h3").textContent;
  
    const priceMatches = priceText.match(currencyRegex);
    const priceWithCurrency = priceMatches ? priceMatches[0] : getRandomPrice();
  
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push({ heading, price: priceWithCurrency });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  function getRandomPrice() {
    const randomValue = Math.floor(Math.random() * 100) + 1; // Generate a random value between 1 and 100
    const randomCurrency = "$"; // Assign a default currency symbol
  
    return randomCurrency + randomValue;
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
  
  

  function showCard(cardId) {
    var card = document.getElementById(cardId);
    card.style.display = "block";
    document.querySelector('.overlay').style.display = "block";
  }
  
  function hideCard() {
    var infoCards = document.getElementsByClassName('info-card');
    for (var i = 0; i < infoCards.length; i++) {
      infoCards[i].style.display = "none";
    }
    document.querySelector('.overlay').style.display = "none";
  }
  
  
  