function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var root = [3,9,20,null,null,15,7];

var maxDepth = function(root) {
    let height = 0;

    const explore = (node, depth) =>{
        if(!node)
            return 0;

        if(depth > height)
            height = depth;
        
        if(node.left)
            explore(node.left, depth + 1);

        if(node.right)
            explore(node.right, depth + 1);
    }

    explore(root, 1);
    return height;
};

console.log(maxDepth(root));