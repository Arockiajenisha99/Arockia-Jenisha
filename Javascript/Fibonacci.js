function fibonacci(){
   var a=0,b=1,sum=0,n;
   n=parseInt(document.getElementById("num").value);
   document.write("Fibonacci series upto "+n+" is:");
   for(i=0;i<n;i++){
      document.write(a+" ");
      sum=a+b;
      a=b;
      b=sum;
   }
}