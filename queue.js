class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Queue - Big-O time complexity
   * - Enqueue - O(1)
   * - Dequeue - O(1)
   * - Peek - O(1)
   * - IsEmpty - O(1)
   * - Size - O(1)
   * - Clear - O(n)
   * - Print - O(n)
   **/

  // Add an element to the end of the queue - O(1)
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element of the queue - O(1)
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Return the front element of the queue without removing it - O(1)
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty - O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue - O(1)
  size() {
    return this.items.length;
  }

  // Clear the queue - O(n)
  clear() {
    this.items = [];
  }

  // Print the queue - O(n)
  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      console.log("Queue elements: ", this.items.join(", "));
    }
  }
}

// Example usage
const queue = new Queue();

queue.enqueue(1); // Enqueue 1
queue.enqueue(2); // Enqueue 2
queue.enqueue(3); // Enqueue 3
queue.printQueue(); // Output: Queue elements: 1, 2, 3

console.log(queue.dequeue()); // Dequeue - Output: 1
queue.printQueue(); // Output: Queue elements: 2, 3

console.log(queue.peek()); // Peek - Output: 2
console.log(queue.size()); // Size - Output: 2

console.log(queue.isEmpty()); // IsEmpty - Output: false

queue.clear(); // Clear the queue
queue.printQueue(); // Output: Queue is empty

console.log("?");
