export default (description, cost, shipping) => {
  return (
    <div>
      <div id="smart-button-container">
        <div style="text-align: center;">
          <div id="paypal-button-container"></div>
        </div>
      </div>
    <script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=CAD" data-sdk-integration-source="button-factory"></script>
    <script>
      function initPayPalButton() {
        paypal.Buttons({
          style: {
            shape: 'pill',
            color: 'blue',
            layout: 'vertical',
            label: 'paypal',
            
          },

          createOrder: function(data, actions) {
            const value = cost * 1.13 + shipping;
            return actions.order.create({
              purchase_units: [{"description":description,"amount":{"currency_code":"CAD","value":value || 163 ,"breakdown":{"item_total":{"currency_code":"CAD","value":cost||100},"shipping":{"currency_code":"CAD","value":shipping||50},"tax_total":{"currency_code":"CAD","value":13}}}}]
            });
          },

          onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {
              
              // Full available details
              console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

              // Show a success message within this page, e.g.
              const element = document.getElementById('paypal-button-container');
              element.innerHTML = '';
              element.innerHTML = '<h3>Thank you for your payment!</h3>';

              // Or go to another URL:  actions.redirect('thank_you.html');
              
            });
          },

          onError: function(err) {
            console.log(err);
          }
        }).render('#paypal-button-container')
      }
      initPayPalButton();
    </script>
  </div>
  );
}