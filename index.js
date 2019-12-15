class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const checkSubtree = (root1, root2) => {
  const tree1 = getStringRepresentation(root1)
  const tree2 = getStringRepresentation(root2)

  return tree1.endsWith(tree2)
}

const getStringRepresentation = (node, str = '') => {
  str += node ? node.value : '_'

  if (node) {
    str += getStringRepresentation(node.left)
    str += getStringRepresentation(node.right)
  }

  return str
}

const root1 = new Node(7)
root1.left = new Node(5)
root1.right = new Node(9)

const root2 = new Node(7)
root2.left = new Node(3)
root2.right = new Node(9)

checkSubtree(root1, root2)