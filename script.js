document.addEventListener('DOMContentLoaded', () => {
  const buyNowBtn = document.getElementById('buy-now-btn');
  const checkoutBtn = document.getElementById('checkout-btn');
  const checkoutSection = document.getElementById('checkout');

  buyNowBtn.addEventListener('click', () => {
    checkoutSection.scrollIntoView({ behavior: 'smooth' });
  });

  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  const amount = params.get('amount');

  const widget = new WidgetCheckout({
    currency: 'COP',
    amountInCents: amount,
    reference: ref,
    publicKey: 'pub_test_087VTw4V3pdPD4vjUWEMODmqT8oq4SLQ',
    redirectUrl: window.location.origin + '/success.html',
  });

  checkoutBtn.addEventListener('click', () => {
    widget.open();
  });
});
