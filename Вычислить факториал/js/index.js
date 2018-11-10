function testFactorial(a) {

    var x;
    x=1;
    for(i=1;i<=a;i++)
        x=x*i;

    return x;

}
alert( testFactorial(5) ); 
