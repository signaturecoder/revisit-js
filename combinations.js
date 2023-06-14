// Given a set of n things, generate all the combinations of its subsets.
// e.g - [a,b,c] = [[], [a], [b], [c], [a,b], [b,c], [a,c], [a,b,c]] - 2d array
// return an array of all the elements
const combinations = (elements) => {

    // base case to return an empty array if there is no elements
    if(elements.length === 0) return [ [] ];

    // take the first element to make the decision
    const firstEle = elements[0];

    // create a combination with rest elements without taking the first
    const rest = elements.splice(1);
    const combsWithoutFirstEle = combinations(rest);

    // create a master list along with first element
    const combsWithFirstEle = [];

    // we need to add first element to each of the combination of rest elements
    combsWithoutFirstEle.forEach((comb) => {
        // add the first element to each combination ( make a copy of each combination and then add)
        const combWithFirstEle  = [...comb, firstEle];
        combsWithFirstEle.push(combWithFirstEle);
    });

    // add both the combination list with or without the first elements
    return [...combsWithoutFirstEle, ...combsWithFirstEle];

}

// Time Complexity : O (2^n) - no. of node available in each level
// Space Complexity : O (n*n) - no. of stack frames in call stack


console.log(combinations(['a','b','c']));
console.log(combinations(['b','c']));