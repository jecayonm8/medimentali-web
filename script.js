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
  const signature = params.get('signature');

  const widget = new WidgetCheckout({
    currency: 'COP',
    amountInCents: amount,
    reference: ref,
    publicKey: 'pub_test_087VTw4V3pdPD4vjUWEMODmqT8oq4SLQ',
    'signature:integrity': signature,
    redirectUrl: window.location.origin + '/success.html',
  });

  checkoutBtn.addEventListener('click', () => {
    widget.open(function (result) {
      var transaction = result.transaction;
      if (transaction && transaction.status === 'APPROVED') {
        window.location.href = 'success.html';
      } else if (transaction) {
        alert('El pago no fue aprobado. Estado: ' + transaction.status);
      }
    });
  });
});
