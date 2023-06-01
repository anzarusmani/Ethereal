document.addEventListener("DOMContentLoaded", function() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Display the cart items
  cartItems.forEach(function(item) {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    const heading = document.createElement("h3");
    heading.textContent = item.heading;

    const price = document.createElement("p");
    price.textContent = item.price;

    cartItemDiv.appendChild(heading);
    cartItemDiv.appendChild(price);

    cartItemsContainer.appendChild(cartItemDiv);
  });

  const proceedButton = document.getElementById("proceedToPaymentBtn");
  const continueButton = document.getElementById("continueShoppingBtn");
  const tt1 = document.querySelector(".tt1");

  // Calculate the total price
  const totalPrice = cartItems.reduce(function(acc, item) {
    const priceValue = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + priceValue;
  }, 0);

  // Display the total price
  tt1.textContent = totalPrice.toFixed(2); // Assuming the total price is a decimal value with 2 decimal places

  proceedButton.addEventListener("click", function() {
    // Code to be executed when the "Proceed to Payment" button is clicked
    cartItemsContainer.innerHTML = ""; // Clear the content of the container
    localStorage.removeItem("cartItems"); // Remove the cart items from localStorage
    const totalPrice = tt1.textContent;
    localStorage.setItem('totalPrice', totalPrice);
    window.location.href = 'payment.html';
    // tt1.textContent = ""; // Clear the total price

  });

  continueButton.addEventListener("click", function() {
    // Code to be executed when the "Continue Shopping" button is clicked
    cartItemsContainer.innerHTML = ""; // Clear the content of the container
    localStorage.removeItem("cartItems"); // Remove the cart items from localStorage
    tt1.textContent = ""; // Clear the total price
  });
});



