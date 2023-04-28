let items = document.querySelectorAll('.item');
  items.forEach(function(item) {
   item.addEventListener('click', function() {
    let details = item.querySelector('.details');
    if (details.style.display === 'none') {
     details.style.display = 'block';
    } else {
     details.style.display = 'none';
    }
   });
  });