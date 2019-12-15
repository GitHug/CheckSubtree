class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const containsTree = (root1, root2) => {
  const tree1 = getStringRepresentation(root1)
  console.log(tree1)

  const tree2 = getStringRepresentation(root2)
  console.log(tree2)

  return tree1.includes(tree2)
}

const getStringRepresentation = (node, str = '') => {
  str += node ? node.value : '_'

  if (node) {
    str += getStringRepresentation(node.left)
    str += getStringRepresentation(node.right)
  }

  return str
}

const root1 = new Node(10)
root1.left = new Node(7)
root1.left.left = new Node(5)
root1.left.right = new Node(9)

const root2 = new Node(7)
root2.left = new Node(5)
root2.right = new Node(9)

containsTree(root1, root2)