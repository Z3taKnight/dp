/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let root1Leaf = getLeafNode(root1);
  root1Leaf = root1Leaf.filter((ele) => ele != false);
  let root2Leaf = getLeafNode(root2);
  root2Leaf = root2Leaf.filter((ele) => ele != false);
  return equalLeaf(root1Leaf, root2Leaf);
};

var getLeafNode = function (root) {
  if (!root) return false;
  let arr = [];
  let leftLeafNode = getLeafNode(root.left);
  let rightLeafNode = getLeafNode(root.right);
  if (!leftLeafNode && !rightLeafNode) arr.push(root.val);
  else if (Array.isArray(leftLeafNode) && Array.isArray(rightLeafNode))
    arr.push(...leftLeafNode, ...rightLeafNode);
  else if (Array.isArray(leftLeafNode))
    arr.push(...leftLeafNode, rightLeafNode);
  else if (Array.isArray(rightLeafNode))
    arr.push(leftLeafNode, ...rightLeafNode);
  else arr.push(leftLeafNode, rightLeafNode);
  return arr;
};

var equalLeaf = function (leaf1, leaf2) {
  if (leaf1.length != leaf2.length) return false;
  return leaf1.every((ele, i) => ele === leaf2[i]);
};
