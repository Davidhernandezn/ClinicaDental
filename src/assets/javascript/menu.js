document.getElementById('hamburger-button').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
  });
  
  document.getElementById('menu').addEventListener('click', function() {
    this.classList.remove('open');
  });
  