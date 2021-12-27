function scores100(scores){
  let len = scores.length;
  
  for(let i=0; i<len-1; i++)
    {
      if(scores[i]==100 && scores[i+1]==100)
      {
        return true;
      }
  
    }
  return false;
}