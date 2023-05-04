export class LinkedList {
  head = null
  tail = null
  constructor() { }

  add(val) {
    const n = LinkedList.createNode(val)
    if (!this.head) {
      this.head = n
      this.tail = n
    } else if (this.tail) {
      this.tail.next = n
      this.tail = n
    }
  }

  prepend(val) {
    const n = LinkedList.createNode(val)
    if (!this.head) {
      this.head = n
      this.tail = n
    } else {
      n.next = this.head
      this.head = n
    }
  }

  contains(val) {
    let current = this.head
    while (current) {
      if (current.value === val) {
        return true
      }

      current = current.next
    }

    return false
  }

  remove(val) {
    if (!this.head) return false

    if (this.head.value === val) {
      if (this.head === this.tail) {
        this.head = this.tail = null
        return true
      }
      this.head = this.head.next
      return true
    }

    let current = this.head

    while (current.next) {
      if (current.next.value === val) {
        current.next = current.next.next
        if (!current.next) {
          this.tail = current
        }
        return true
      }
      current = current.next
    }

    return false
  }

  traverse(fun) {
    let current = this.head

    while (current) {
      fun(current.value)
      current = current.next
    }
  }

  reverseTraversal(fun) {
    let current = this.tail

    while (current) {
      fun(current.value)

      if (current === this.head) break

      let current2 = this.head
      while (current2.next !== current) {
        current2 = current2.next
      }
      current = current2
    }
  }

  static createNode(val) {
    return {
      value: val,
      next: null
    }
  }
}