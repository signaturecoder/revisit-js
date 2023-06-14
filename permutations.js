// Given a set of n things, generate all possible permutations
// e.g [a,b,c ] = [[c,b,a], [b,c,a], [b,a,c], [c,a,b], [a,c,b], [a,b,c]]
// slice(n) = return a new copy of array from the given index to the end of the array

const permutations = (elements) => {
    // base case - when an empty arr is there, return an array of empty arr
    if(elements.length === 0) return [ [] ];

    // get first element from array
    const firstEle = elements[0];

    // get the rest of elememts in separate array and calls the permutation
    const rest = elements.slice(1);
    const permsWithoutFirst = permutations(rest);

    // create all permutations List including first element
    const allPermutions = [];

    // iterate over the rest permutations elements and add first elements in all possible positions
    permsWithoutFirst.forEach((perm) => {
        for(let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), firstEle, ...perm.slice(i)];
            allPermutions.push(permWithFirst);
        }
    });

    return allPermutions;

}


// Time : O(n!)
// Space : O(n*n)

// console.log(permutations(['a','b','c']));
// console.log(permutations(['b','c']));
console.log(permutations([1,2,3]));


//---------------  Given n and k, return the kth permutation sequence.------------
/*

https://leetcode.com/problems/permutation-sequence/
Input: n = 3, k = 3
Output: "213"

"123"
"132"
"213"
"231"
"312"
"321"

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
};