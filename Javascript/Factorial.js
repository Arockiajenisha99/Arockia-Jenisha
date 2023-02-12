function fact() {
    var n,i,fact;
    n=parseInt(document.getElementById("num").value);
    fact=1;
    for (i=n;i>=1;i--) {
        fact = fact*i;        
    }   
    document.getElementById("result").innerHTML="The Factorial of "+n+" is: "+fact;
}
