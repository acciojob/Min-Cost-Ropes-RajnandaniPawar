function mincost(arr)
{ 
//write your code here
// return the min cost
    // Step 1: Create a min-heap using a priority queue (min-heap)
    const minHeap = new MinPriorityQueue();
    
    // Insert all rope lengths into the min-heap
    for (let i = 0; i < arr.length; i++) {
        minHeap.enqueue(arr[i]);
    }

    let totalCost = 0;

    // Step 2: Keep connecting ropes until only one rope is left
    while (minHeap.size() > 1) {
        // Extract the two smallest ropes
        let first = minHeap.dequeue().element;
        let second = minHeap.dequeue().element;

        // The cost to connect these two ropes
        let cost = first + second;

        // Add this cost to the total cost
        totalCost += cost;

        // Push the new rope (connected length) back into the heap
        minHeap.enqueue(cost);
    }

    // Return the total cost of connecting all the ropes
    return totalCost;

}

module.exports=mincost;
