import { LinkedList } from "../src/linked-list";
describe('LinkedList', () => {
  let list

  beforeEach(() => {
    list = new LinkedList()
  })

  test('should create a new node with value and null next', () => {
    const node = LinkedList.createNode(42)
    expect(node.value).toBe(42)
    expect(node.next).toBeNull()
  })

  test('should add a node to the end of the list', () => {
    list.add(1)
    expect(list.head.value).toBe(1)
    expect(list.tail.value).toBe(1)

    list.add(2)
    expect(list.head.value).toBe(1)
    expect(list.tail.value).toBe(2)

    list.add(3)
    expect(list.head.value).toBe(1)
    expect(list.tail.value).toBe(3)
  })

  test('should prepend a node to the beginning of the list', () => {
    list.prepend(1)
    expect(list.head.value).toBe(1)
    expect(list.tail.value).toBe(1)

    list.prepend(2)
    expect(list.head.value).toBe(2)
    expect(list.tail.value).toBe(1)

    list.prepend(3)
    expect(list.head.value).toBe(3)
    expect(list.tail.value).toBe(1)
  })

  test('should contain a value in the list', () => {
    list.add(1)
    list.add(2)
    list.add(3)

    expect(list.contains(2)).toBe(true)
    expect(list.contains(4)).toBe(false)
  })

  test('should remove a node from the list', () => {
    list.add(1)
    list.add(2)
    list.add(3)

    expect(list.remove(2)).toBe(true)
    expect(list.contains(2)).toBe(false)

    expect(list.remove(4)).toBe(false)
    expect(list.contains(3)).toBe(true)

    expect(list.remove(1)).toBe(true)
    expect(list.head.value).toBe(3)

    expect(list.remove(3)).toBe(true)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
  })

  test('should traverse the list and apply a function to each value', () => {
    list.add(1)
    list.add(2)
    list.add(3)

    const result = []
    list.traverse((val) => {
      result.push(val)
    })

    expect(result).toEqual([1, 2, 3])
  })

  test('should reverse traverse the list and apply a function to each value', () => {
    list.add(1)
    list.add(2)
    list.add(3)

    const result = []
    list.reverseTraversal((val) => {
      result.push(val)
    })
    console.log(result);
    expect(result).toEqual([3, 2, 1])
  })
})
