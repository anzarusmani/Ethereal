function showInfo(button) {
    var infoCard = button.nextElementSibling;
    infoCard.style.display = 'block';
  }
  
  function hideInfo() {
    var infoCards = document.getElementsByClassName('info-card');
    for (var i = 0; i < infoCards.length; i++) {
      infoCards[i].style.display = 'none';
    }
  }
  