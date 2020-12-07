document.getElementById('donate').addEventListener('click', () => {
  var win = window.open('https://carbonfund.org/donate', '_blank');
  win.focus();
});

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('price', (response) => {
    if (response.price) {
      document.getElementById('price').innerHTML = response.price;
    }
  });
});
