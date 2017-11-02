document.querySelector('#submit').addEventListener('click', function () {
  window.location = '/?q=' + document.querySelector('#search').value;
});