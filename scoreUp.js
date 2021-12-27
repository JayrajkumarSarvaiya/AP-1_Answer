function scoreUp(key, answers){
  let count = 0;
  if(key.length == answers.length)
  {
    for(let i=0; i<key.length; i++)
    {
      if(key[i] == answers[i])
      {
        count = count + 4;
      }
      else if(answers[i] == '?')
      {
        count = count;
      }
      else
      {
        count = count -1;
      }
    }
  }
  return count;
}