//https://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

var change = document.getElementById('intro').innerHTML;

function pointer() {
  var str = document.getElementById('intro');
  var search = document.getElementById('userinput').value;
  var re = new RegExp(search, 'g');

  if (search.length > 0)
    str.innerHTML = change.replace(re, `<span style="background-color: #FFFF00">$&</span>`); 
  else 
    str.innerHTML = change;
}