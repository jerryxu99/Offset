var priceString = document
  .getElementById('sc-subtotal-amount-buybox')
  .querySelector('span')
  .innerHTML.substring(10);

var price = parseFloat(priceString);
console.log(price);
