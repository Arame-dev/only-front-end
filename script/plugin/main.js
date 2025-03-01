document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const name = card.querySelector('.product-item')?.getAttribute('data-name');  // Получаем название товара из .product-item
      if (name && name.toLowerCase().includes(filter)) {
        card.style.display = ''; 
      } else {
        card.style.display = 'none';
      }
    });
  });
  