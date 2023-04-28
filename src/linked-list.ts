interface LNode {
  value: any
  next: any
}
function createNode(val): LNode {
  return {
    value: val,
    next: null
  }
}

class LinkedList {
  public head: LNode
  public tail: LNode
  constructor() { }

  add(val: any) {
    const n = createNode(val)
    if (!this.head) {
      this.head = n
      this.tail = n
    } else {
      this.tail.next = n
      this.tail = n
    }
  }

  prepend(val) {
    const n = createNode(val)
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
    let current = this.head

    if (!this.head) return false

    if (current.value === val) {
      this.head = current.next
      return true
    }

    while (current.next) {
      if (current.next.value === val) {
        current.next = current.next.next
        return true
      }
      current = current.next
    }

    return false
  }

  traverse(fun: (val: any) => any) {
    let current = this.head

    while (current) {
      fun(current.value)
      current = current.next
    }
  }

  reverseTraversal(fun: (val: any) => any) {
    let current = this.tail

    while (current) {
      fun(current.value)

      if (current === this.head) break

      let current2 = this.head
      while (current2.next === current) {
        current2 = current2.next
      }
      current = current2
    }
  }
}