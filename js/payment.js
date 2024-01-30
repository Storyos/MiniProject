






function calculatePrice() {
  const quantity = parseInt(document.getElementById('quantity').value);
  const pricePerTicket = 56000;
  const totalPrice = pricePerTicket * quantity;
  document.getElementById('totalPrice').textContent = totalPrice.toLocaleString();
}





