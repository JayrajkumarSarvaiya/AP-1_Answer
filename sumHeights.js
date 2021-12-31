function sumHeights(heights, start, end){
  let len = heights.length;
  let result = 0;
  
  for(let i=start; i<end; i++)
  {
    result += Math.abs(heights[i] - heights[i+1])
  }
  return result;
}