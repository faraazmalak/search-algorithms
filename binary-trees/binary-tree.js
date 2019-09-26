let factorial =    require("./factorial");

//Given a number of unlabelled nodes, Calculate number of possible tree combinations (shapes),
//Catalan Number Formula for n nodes:
/*
    2n
       C
        n
       ---
       n + 1
 */
const numberOfTreeShapes = (n) => factorial(2*n, n+1) / factorial(n) / (n + 1);

//Given number of labelled nodes, return number of possible permutations
const numberOfTreeWithLabelledNodes = (n) => factorial(n) * numberOfTreeShapes(n);

//Given number of nodes in a tree, Return number of trees with max height
const numberOfTreesWithMaxHeight = (n, labelledNodes = false) => Math.pow(2, n-1) * (labelledNodes ? factorial(n) : 1);

//For a given tree height, get  minimum number of nodes present
const getNodeCount = (treeHeight, isStrictTree = false) => !isStrictTree ?  treeHeight + 1 : 2*treeHeight + 1;

//For a given tree height, get maximum number of nodes that can be accomodated
//Use Geometric Progression formula n = (2^h+1) - 1
const getMaxNumberOfNodes = (treeHeight) => Math.pow(2,getNodeCount(treeHeight)) - 1;

//For given number of nodes, calculate maximum tree height
const getMaxTreeHeight = (n) => --n;

//For given number of nodes, get minimum tree height
//Use Geometric Progression formula h = Math.round(Math.log2(n  +1)-1)
const getMinTreeHight = (n) => Math.round(Math.log2(n + 1)-1);

//Given total nodes having 2 children, find number of leaf nodes / deg(0) nodes
//Formula: deg(0) = deg(2) + 1
const getLeafNodeCount = (n) => n + 1;

console.log(` 
Unlabelled Nodes:
Number of Trees Shapes (Combinations): ${numberOfTreeShapes(3)};
Number of Trees with maximum height: ${numberOfTreesWithMaxHeight(3)}

=============================
Labelled Nodes:

Number of possible Tree Permutations : ${numberOfTreeWithLabelledNodes(3)}
Number of Trees with maximum height: ${numberOfTreesWithMaxHeight(3, true)}

=============================

For a tree of height 2:
Minimum Number of nodes present: ${getNodeCount(2)}
Minimum Number of nodes present in Strict Binary Tree: ${getNodeCount(2, true)}
Maximum number of nodes that be accomodated: ${getMaxNumberOfNodes(2)}

=============================

For given number of nodes 3
Maximum tree height: ${getMaxTreeHeight(3)}
Minimum Tree height: ${getMinTreeHight(3)}

=============================

Given 3 deg(2) nodes,
Number of leaf nodes/deg(0) nodes: ${getLeafNodeCount(3)}
`)


