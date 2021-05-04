'use strict';

window.onload = window.onresize = function () {
  var body = document.querySelector('body');
  var root = document.querySelector('#root');
  var height = window.innerHeight;
  body.style.height = height + 'px';
  root.style.height = height + 'px';
};
