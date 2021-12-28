function scoresSpecial(a, b){
  let alen = a.length;
  let maxa = 0;
  let blen = b.length;
  let maxb = 0;
  
  let len = (alen>blen ? alen : blen);
  
  for(let i=0; i<len; i++)
  {
    if(a[i]%10 == 0 && a[i]>maxa)
    {
      maxa = a[i];
    }
    if(b[i]%10 == 0 && b[i]>maxb)
    {
      maxb = b[i];
    }
  }
  return maxa+maxb;
}