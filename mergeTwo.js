function mergeTwo(a, b, n){
  let arr = [];
  let posA = 0;
  let posB = 0;
  for(let i=0; i<n; i++){
    if(a[posA]<b[posB]){
      arr.push(a[posA]);
      posA += 1;
    }
    else if(a[posA]==b[posB]){
      arr.push(a[posA]);
      posA += 1;
      posB += 1;
    }
    else{
      arr.push(b[posB]);
      posB += 1;
    }
  }
  return arr;
}