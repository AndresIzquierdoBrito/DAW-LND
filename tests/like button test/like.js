window.addEventListener('load', function() {
    let icon = document.querySelector('svg');
    icon.onclick = function() {
      icon.classList.toggle('checked');
    }
  });