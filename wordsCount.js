function wordsCount(words, len){
  let count = 0;
  for(let i =0; i<words.length; i++)
  {
    if(words[i].length == len)
    {
      count ++;
    }
  }
  return count;
}