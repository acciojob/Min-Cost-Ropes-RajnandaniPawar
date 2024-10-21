function mincost(arr)
{ 
//write your code here
// return the min cost
   // Step 1: Sort the array to simulate a min-heap
    arr.sort((a, b) => a - b);
    
    let totalCost = 0;

    while (arr.length > 1) {
        // Step 2: Get the two smallest elements
        const first = arr.shift();  // Remove and get the smallest element
        const second = arr.shift(); // Remove and get the second smallest element

        // Step 3: Calculate the cost of combining them
        const cost = first + second;
        totalCost += cost;

        // Step 4: Insert the combined rope back into the array (heap-like behavior)
        arr.push(cost);

        // Re-sort the array after pushing the new element
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports=mincost;
