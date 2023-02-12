function sum() {
    var i,n,sum=0;
    n=parseInt(document.getElementById("num").value);
    for (i=1; i<=n; i++) {
        sum = sum+i;
              
    }   
    document.getElementById("result").innerHTML="The Sum of "+n+" is: "+sum;
}
