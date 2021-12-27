function scoresIncreasing(scores){
  let len = scores.length;
  let match;
  for(let i=0; i<len-1; i++)
  {
    if(scores[i]<=scores[i+1])
      match = true;
    else
      return false;
  }
  return match;
}