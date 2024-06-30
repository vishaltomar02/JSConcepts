class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class Queue {
  constructor() {
    this.frontNode = null;
    this.backNode = null;
    this.size = 0;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    const newNode = new Node(item);
    if (!this.frontNode) {
      console.log("enqueue front")
      this.frontNode = newNode;
    }
    else if (!this.backNode) {
      console.log("enqueue back")
      this.backNode = newNode;
      this.frontNode.next = this.backNode;
    }
    else {
      console.log("enqueue front back")
      this.backNode.next = newNode;
    }
    this.size++;
    return this.length();
  }

  /**
   * Removes an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    console.log(this.frontNode, this.backNode)
    if (this.isEmpty()) return undefined;
    let item = this.frontNode;
    this.frontNode = this.frontNode?.next;
    if (!this.frontNode?.next) this.backNode = null;
    this.size--;
    console.log(item?.value)
    return item?.value;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
    this.size === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    return this.frontNode.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    console.log("back inside", [this.backNode || this.frontNode])
    return (this.backNode || this.frontNode).value;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this.size;
  }
}

const q = new Queue();
q.enqueue(100);
q.enqueue(200);
q.dequeue()
q.dequeue()
q.dequeue()