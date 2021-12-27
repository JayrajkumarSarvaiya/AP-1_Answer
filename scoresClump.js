function scoresClump(scores){
  let len = scores.length;
  for (let i=0; i<len-2; i++)
  {
      if (scores[i+2] - scores[i+1] <= 2 && scores[i+2] - scores[i] <= 2)
      {
        return true;
      }

  }
  return false;
}