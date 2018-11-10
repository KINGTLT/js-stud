//Последнее значение цикла
function number(n) {
  var a = 1,
    b = 1;
  for (var i = 1; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( number(1) );
alert( number(2) );
alert( number(3) );
alert( number(4) );
alert( number(5) );
