function hasOne(n){
  while(n%10!=0||n==10)
  {
    if(n%10 == 1)
      return true;
    else
      n = Math.floor(n/10); 
  } 
  return false; 

}