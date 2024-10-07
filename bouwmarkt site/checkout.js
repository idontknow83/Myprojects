document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Betaling verwerkt! Bedankt voor uw aankoop.');
    window.location.href = 'index.html';
});
