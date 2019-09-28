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





/*
========================================================================================================


                                    TREE HEIGHT VS NODES

========================================================================================================
 */

/*
-----------------------------------------------

Given tree height, find number of nodes (min/max)

-----------------------------------------------
 */

const getNodeCount = (treeHeight, isStrictTree = false, minCount = false, maxCount = false) => {

    const minNodes = treeHeight + 1;

    if(minCount){
        //Return the mimimum nodes present in given tree height

        if(isStrictTree){
            //Formula: n = 2h+1
            return 2*treeHeight+1;
        }

        return minNodes;

    }else if (maxCount){
        //Return maximum nodes that can be accomodated in the given tree height
        //Use Geometric Progression formula n = (2^h+1) - 1
        //Result is the same for strict and non-strict binary trees
        return Math.pow(2,minNodes) - 1
    }

}

/*
-----------------------------------------------

Given number of nodes, find tree height (min/max)

-----------------------------------------------
 */

const getTreeHeight = (n, isStrictTree = false, minHeight = false, maxHeight = false) => {

    if(minHeight){
        //Return min tree height
        //Use Geometric Progression formula h = Math.round(Math.log2(n  +1)-1)
        return Math.round(Math.log2(n + 1)-1);
    }else if(maxHeight){
        //Return maximum tree height
        if(isStrictTree){
            //Formula: h = (n-1) / 2
            return (n-1) / 2
        }
        return n - 1;
    }

}


//Given deg(2) node count, find number of leaf nodes / deg(0) nodes
//Formula: deg(0) = deg(2) + 1
//Applies to Strict + Non-Strict Binary Trees
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
Non-Strict Binary Tree -> Minimum Number of nodes present: ${getNodeCount(2, false, true)}
Strict Binary Tree -> Minimum Number of nodes present: ${getNodeCount(2, true, true)}
Strict + Nin-Strict Binary Tree -> Maximum number of nodes that be accomodated: ${getNodeCount(2, false, false, true)}

=============================

For given number of nodes 3
Non-Strict Binary Tree -> Maximum tree height: ${getTreeHeight(3, false, false, true)}
Strict Binary Tree -> Maximum tree height for Strict Binary Tree: ${getTreeHeight(3, true, false,true)}
Strict + Nin-Strict Binary Tree -> Minimum Tree height: ${getTreeHeight(3, false, true)}

=============================

Given 3 deg(2) nodes,
Strict + Nin-Strict Binary Tree -> Number of leaf nodes/deg(0) nodes: ${getLeafNodeCount(3)}
`)


