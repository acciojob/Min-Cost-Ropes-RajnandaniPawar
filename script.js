function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b) => a-b);
		let arr2 = [];
	// arr.sort((a,b) => a-b);
	let len = arr.length;
	while(len != 1){
		let sum = arr[0]+arr[1];
		arr.splice(0,2);
		arr2.push(sum);
		arr2.sort((a,b) => a-b);
		len--
	}
	let res = 0;
	for(let i= 0; i<arr2.length; i++){
		res += arr2[i];
	}
	return res;

}

module.exports=mincost;
