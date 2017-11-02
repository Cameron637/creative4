'use strict';

const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('#searchButton');

searchBar.addEventListener('keyup', function (key) {
  if (key.which === 13 || key.keyCode === 13) {
    searchButton.click();
  }
});

searchButton.addEventListener('click', function () {
  window.location = '/?q=' + searchBar.value;
});