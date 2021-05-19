// 914. X of a Kind in a Deck of Cards
// Easy

// 842

// 216

// Add to List

// Share
// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.
 

// Example 1:

// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
// Example 2:

// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.
// Example 3:

// Input: deck = [1]
// Output: false
// Explanation: No possible partition.
// Example 4:

// Input: deck = [1,1]
// Output: true
// Explanation: Possible partition [1,1].
// Example 5:

// Input: deck = [1,1,2,2,2,2]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[2,2].
 

// Constraints:

// 1 <= deck.length <= 104
// 0 <= deck[i] < 104
// Accepted
// 66,123
// Submissions
// 195,596

/**
 * @param {number[]} deck
 * @return {boolean}
 */
 var hasGroupsSizeX = function(deck) {
    var map = {}; // grab the number of times each value occurs in deck
    for (var i= 0 ; i< deck.length;i++){
	// if values hasnt been added to map yet 
        if (typeof map[deck[i]] == 'undefined'){
            map[deck[i]] = 1;
        }else{
	// increment count of that value in map by one
            map[deck[i]]+=1;
        }
    }
// find our value with the minimum number of occurances
    var min = map[deck[0]];
    for (var k in map){
        if (map[k]<=min){
            min = map[k];
        }
    }
     var flag;
    for (var i = 2; i<=min;i++){
	// determines whether each number of occurances can be grouped into sizes of i
        flag= true;
        for (var k in map){
	// number of occurances of value k cant be grouped into sizes of i
            if (map[k]%i!=0){
                flag = false;
                break;
            }
        }
	// all occurance numbers where able to be grouped with equal sizes
        if (flag==true){
            return true;
        }
    }
// no grouping is possible
    return false; 
};
