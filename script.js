function mincost(arr)
{ 
//write your code here
// return the min cost
	let arr2 = {};
	arr.sort();
	let len = arr.length;
	while(len != 1){
		let sum = arr[0]+arr[1];
		arr2.put(sum);
		arr2.splice(0,2,sum);
		arr.sort();
		len--
	}
	let res = 0;
	for(let i= 0; i<arr2.length; i++){
		res += arr2;
	}
}

module.exports=mincost;
