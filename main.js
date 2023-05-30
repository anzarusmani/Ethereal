// code for just nav bars

document.addEventListener('DOMContentLoaded', function() {
    var transitionElement = document.querySelector('.transition');
    var links = document.querySelectorAll('a');

    setTimeout(function() {
      transitionElement.classList.remove('is-active');
    }, 500);
  
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = this.getAttribute('href');
        transitionElement.classList.add('is-active');
        setTimeout(function() {
          window.location.href = target;
        }, 500);
      });
    }
  });
  

// code for data href links  (imgs)

document.addEventListener('DOMContentLoaded', function() {
    var transitionElement = document.querySelector('.transition');
    var cards = document.querySelectorAll('.card');
  
    setTimeout(function() {
      transitionElement.classList.remove('is-active');
    }, 500);
  
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      card.addEventListener('click', handleClick);
    }
  
    function handleClick(e) {
      e.preventDefault();
      var target = this.getAttribute('data-href');
      transitionElement.classList.add('is-active');
      setTimeout(function() {
        window.location.href = target;
      }, 500);
    }
  });
  