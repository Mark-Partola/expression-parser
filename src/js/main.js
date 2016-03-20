import Parser from './Parser';
import Builder from './Builder';

document.querySelector('#start').addEventListener('click', function () {
  let expr = document.getElementById('expression').value;
  //console.log(expr);
  let parser = new Parser(expr);
  let result = parser.getResult();
  let builder = new Builder(result);

  // let elem = document.getElementById('result');
  // elem.innerHTML = '';
  // result.forEach( (obj) => {
  //   elem.innerHTML += obj.type + '<br>';
  // });
});
