class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

/**
 * Memory: O(log(n) + log(m))
 * Time complexity: O(n + km) where k is the number of times t2's root occurs in t1. Tighter bound can be determined by assuming that most of the time a match
 * will exit early if not sub tree.
 */
const containsTree = (t1, t2) => {
  if (!t2) return true
  return isSubTree(t1, t2)
}

const isSubTree = (t1, t2) => {
  if (!t1) return false
  if (t1.value === t2.value && matchTree(t1, t2)) {
    return true
  }

  return isSubTree(t1.left, t2) || isSubTree(t1.right, t2)
}

const matchTree = (t1, t2) => {
  if (!t1 && !t2) return true
  if (!t1 || !t2) return false
  if (t1.value !== t2.value) return false

  return matchTree(t1.left, t2.left) && matchTree(t1.right, t2.right)
}


const root1 = new Node(10)
root1.left = new Node(7)
root1.left.left = new Node(5)
root1.left.right = new Node(9)

const root2 = new Node(7)
root2.left = new Node(5)
root2.right = new Node(9)

containsTree(root1, root2)