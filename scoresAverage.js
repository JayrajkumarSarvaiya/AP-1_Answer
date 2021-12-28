function scoresAverage(scores){
  let len = scores.length;
  let half = Math.floor(len/2);
  const newArr1 = scores.slice(0,half);
  const newArr2 = scores.slice(half,len);
 
  let sum1 = 0;
  for(let i=0; i<newArr1.length; i++)
  {
    sum1 = sum1 + newArr1[i];
  }
  let avg1 = sum1 / newArr1.length;
  
  let sum2 = 0;
  for(let i=0; i<newArr2.length; i++)
  {
    sum2 = sum2 + newArr2[i];
  }
  let avg2 = sum2 / newArr2.length;
  
  if(avg1>avg2)
    return avg1;
  else
    return avg2;
}