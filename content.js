// var t = document.querySelector('table'),
//   tr = t.querySelector('.total');
// td = tr.getElementsByTagName('td')[0];
// console.log(tr);
// console.log(td);

var priceString = document
  .getElementById('sc-subtotal-amount-buybox')
  .querySelector('span')
  .innerHTML.substring(10);

var price = parseFloat(priceString);
console.log(price);
