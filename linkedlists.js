// Practice with linkedlists, Results are at the bottom.
class Node {
  constructor(name = null) {
    this.name = name;
    this.next = null;
  }
}

class People {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(name) {
    const node = new Node(name);
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    } else {
      this.head = node;
      this.size++;
    }
  }

  prepend(name) {
    const node = new Node(name);
    if (this.head) {
      node.next = this.head;
      this.head = node;
      this.size++;
    } else {
      this.head = node;
    }
  }

  listSize() {
    return this.size;
  }

  headNode() {
    return this.head;
  }

  tailNode() {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    } else {
      return this.head;
    }
  }

  at(index) {
    if (this.head) {
      let count = 0;
      let current = this.head;
      while (current.next && count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      return this.head;
    }
  }

  pop() {
    if (this.head) {
      let current = this.head;
      let previous;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.size--;
    }
  }

  contains(name) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        if (current.name === name) return true;
        current = current.next;
      }
    }
    return false;
  }

  find(name) {
    if (this.head) {
      const size = this.size;
      let i = 0;
      let current = this.head;
      while (i < size && current.next) {
        if ((current.name = name)) return i;
        current = current.next;
        i++;
      }
    }
    return null;
  }

  toString() {
    if (this.head) {
      let list = "";
      let current = this.head;
      while (current.next) {
        list += `(${current.name}) -> `;
        current = current.next;
      }
      list += `(${current.name}) -> null`;
      console.log(list);
      return;
    }
    console.log("null");
  }

  insertAt(name, index) {
    const node = new Node(name);
    const target = this.at(index);
    if (this.head && index >= 0 && index < this.size) {
      let current = this.head;
      let previous;

      // Handle inserting at first index
      if (target.name === current.name) {
        node.next = current;
        this.head = node;
        return;
      } else {
        previous = current;
        current = current.next;
      }

      // Handle other indexes
      while (current.next) {
        if (current.name === target.name) {
          node.next = current;
          previous.next = node;
          current = current.next;
          break;
        } else {
          previous = current;
          current = current.next;
        }
      }
    }
  }

  removeAt(index) {
    if (this.head && index >= 0 && index < this.size) {
      let current = this.head;
      let previous;
      let i = 0;

      // Handle linkedlist of size 1
      if (i === index && this.size === 1) {
        this.head = null;
        return;
      }

      // Handle linkedlist of size greater than 1
      while (current.next) {
        if (i === index) {
          if (i === 0) {
            this.head = current.next;
            break;
          }
          previous.next = current.next;
          current.next = null;
          break;
        } else {
          previous = current;
          current = current.next;
          i++;
        }
      }
    }
  }
}

// RESULTS!
const players = new People();
players.toString(); // result: null

players.append("Harry Kane");
players.append("Jeremy Doku");
players.append("Leroy Sane");
players.append("Kyle Walker");
players.append("Erling Haaland");

players.toString(); // result: (Harry Kane) -> (Jeremy Doku) -> (Leroy Sane) -> (Kyle Walker) -> (Erling Haaland) -> null

console.log(players.listSize()); // result: 5
players.prepend("Kevin De Bruyne");
players.toString(); // result: (Kevin De Bruyne) -> (Harry Kane) -> (Jeremy Doku) -> (Leroy Sane) -> (Kyle Walker) -> (Erling Haaland) -> null

players.pop();
players.toString(); // result: (Kevin De Bruyne) -> (Harry Kane) -> (Jeremy Doku) -> (Leroy Sane) -> (Kyle Walker) -> null

console.log(players.at(2)); // result: Node { name: 'Jeremy Doku', next: Node}
console.log(players.contains("Kevin De Bruyne")); // result: true
console.log(players.find("Kevin De Bruyne")); // result: 0
console.log(players.headNode()); // result: Node { name: 'Kevin De Bruyne', next: Node}
console.log(players.tailNode()); // result: Node { name: 'Kyle Walker', next: Node}

players.insertAt("John Stones", 2);
players.toString(); // result: (Kevin De Bruyne) -> (Harry Kane) -> (John Stones) -> (Jeremy Doku) -> (Leroy Sane) -> (Kyle Walker) -> null
players.insertAt("Rodri", 0);
players.toString(); // result: (Rodri) -> (Kevin De Bruyne) -> (Harry Kane) -> (John Stones) -> (Jeremy Doku) -> (Leroy Sane) -> (Kyle Walker) -> null

players.removeAt(2);
players.toString(); // result: (Rodri) -> (Kevin De Bruyne) -> (John Stones) -> (Jeremy Doku) -> (Leroy Sane) -> (Kyle Walker) -> null
players.removeAt(0);
players.toString(); // result: (Kevin De Bruyne) -> (John Stones) -> (Jeremy Doku) -> (Leroy Sane) -> (Kyle Walker) -> null
