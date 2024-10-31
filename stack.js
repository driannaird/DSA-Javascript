class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  /**
   * Stack - Big-O time complexity
   * - Push - O(1)
   * - Pop - O(1)
   * - Peek - O(1)
   * - IsEmpty - O(1)
   * - Size - O(1)
   * - Clear - O(n)
   **/

  // Add an element to the top of the stack - O(1)
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack - O(1)
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it - O(1)
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty - O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack - O(1)
  size() {
    return this.items.length;
  }

  // Clear the stack - O(n)
  clear() {
    this.items = [];
  }
}

// Example usage
const stack = new Stack();

console.log(stack);

stack.push(1); // Push 1 onto the stack
stack.push(2); // Push 2 onto the stack
stack.push(3); // Push 3 onto the stack
console.log(stack.items); // Output: [1, 2, 3]

console.log(stack.pop()); // Pop - Output: 3
console.log(stack.items); // Output: [1, 2]

console.log(stack.peek()); // Peek - Output: 2
console.log(stack.size()); // Size - Output: 2

console.log(stack.isEmpty()); // IsEmpty - Output: false

stack.clear(); // Clear the stack
console.log(stack.isEmpty()); // Output: true

console.log("?");
