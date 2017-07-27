let LinkedList = () => {
  this.head = null
  this.tail = null
}

let Node = (value, next, prev) => {
  this.value = value
  this.next = next
  this.prev = prev
}

LinkedList.prototype.addToHead = value => {
  let newNode = new Node(value, this.head, null)
  if (this.head) this.head.prev = newNode
  else this.tail = newNode
  this.head = newNode
}

LinkedList.prototype.removeHead = () => {
  if (!this.head) return null
  let value = this.head.value
  this.head = this.head.next
  if (this.head) this.head.prev = null
  else this.tail = null
  return value
}

LinkedList.prototype.addToTail = value => {
  let newNode = new Node(value, null, this.tail)
  if (this.tail) this.tail.next = newNode
  else this.head = newNode
  this.tail = newNode
}

LinkedList.prototype.removeTail = () => {
  if (!this.tail) return null
  let value = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) this.tail.next = null
  else this.head = null
  return value
}

LinkedList.prototype.search = searchValue => {
  let currentNode = this.head
  while (currentNode) {
    if (currentNode.value === searchValue){
      return currentNode.value
    }
    currentNode = currentNode.next
  }
  return null
}

LinkedList.prototype.indexOf = value => {
  let currentNode = this.head
  let currentIndex = 0
  let indexes = []
  while (currentNode) {
    if (currentNode.value === value){
      indexes.push(index)
    }
    currentIndex++
    currentNode = currentNode.next
  }
  return indexes
}