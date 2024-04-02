function mincost(arr)
{ 
//write your code here
// return the min cost
	Arrays.sort(arr);
	let sum =0 ;
	foreach(let t=0; t<arr.length; t++){
		sum = arr[t] + arr[t+1];
	}
  return sum;
}

module.exports=mincost;
