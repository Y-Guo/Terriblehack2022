import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default (description, cost, shipping) => {
  const initialOptions = {
    "client-id": "ATsYz66tTj5N3Q0tKUGx3GZspwo4TeqQx8oxx-L8cKoODvNWVzJBOLkfGtN5kqJP-J8T4xHuxg9eQy6G",
    currency: "CAD",
    intent: "capture",
  };
  return (
      <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons 
            style={{
              shape: 'pill',
              color: 'blue',
              layout: 'vertical',
              label: 'paypal',
            }}
            createOrder={(data, actions) => {
              const value = cost * 1.13 + shipping;
              return actions.order.create({
                purchase_units: [{"description":description,"amount":{"currency_code":"CAD","value":value ,"breakdown":{"item_total":{"currency_code":"CAD","value":cost},"shipping":{"currency_code":"CAD","value":shipping},"tax_total":{"currency_code":"CAD","value":13}}}}]
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function(orderData) {
                
                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
          
                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thank you for your payment!</h3>';
          
                // Or go to another URL:  actions.redirect('thank_you.html');
                
              });
            }}
            onError={(err) => {
              console.log(err);
            }}
          />
      </PayPalScriptProvider>
  );
}