document.getElementById('donate').addEventListener('click', () => {
  var win = window.open('https://carbonfund.org/donate', '_blank');
  win.focus();
  var price = document.querySelector('#price').innerHTML;
  price.focus();
  price.select();
  document.execCommand('copy');
});

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('price', (response) => {
    if (response.price) {
      document.getElementById('price').innerHTML =
        '$' + (response.price * 0.05).toFixed(2).toString();
    }
  });
});
