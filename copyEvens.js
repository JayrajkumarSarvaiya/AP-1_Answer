function copyEvens(nums, count){
  let temp =0;
  const arr = [];
  for(let i =0; i<nums.length; i++)
  {
    if(nums[i]%2 ==0)
    {
      arr[temp] = nums[i];
      temp++;
    }
    if(temp == count)
      return arr;
  }
  return arr;
}