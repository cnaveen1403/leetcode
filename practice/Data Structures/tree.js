/* 
    A tree is a data structure where a node can have zero or more children. 
    Each node contains a value. Like graphs, the connection between nodes is called edges. 
    A tree is a type of graph, but not all graphs are trees (more on that later).

    These data structures are called “trees” because the data structure resembles a tree 🌳. 
    It starts with a root node and branch off with its descendants, and finally, there are leaves.
*/

/* 
    properties of trees:

    The top-most node is called root.
    A node without children is called leaf node or terminal node.
    Height (h) of the tree is the distance (edge count) between the farthest leaf to the root.
    A has a height of 3
    I has a height of 0
    Depth or level of a node is the distance between the root and the node in question.
    H has a depth of 2
    B has a depth of 1
*/

/* 
    Implementing a simple tree data structure
*/

class TreeNode {
    constructor(value){
        this.value = value;
        this.left = this.right = null;
    }
}

//program to create binary tree

//root of the binary tree
var root = null;

//create root
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);

//create nodes with 3 descendants values
const abe = new TreeNode("Abe");
const homer = new TreeNode("homer");
const bart = new TreeNode("bart");
const lisa = new TreeNode("lisa");
const maggie = new TreeNode("maggie");

abe.descendants.push(homer);
homer.descendants.push(bart, lisa, maggie);

/* 
    Tree data structures have many applications such as:

    -> Maps
    -> Sets
    -> Databases
    -> Priority Queues
    -> Querying an LDAP (Lightweight Directory Access Protocol)
    -> Representing the Document Object Model (DOM) for HTML on Websites.
*/
