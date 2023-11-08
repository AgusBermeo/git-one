// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    let invArray = [];
    for (let element of array) {
      inverseElement = element * -1;
      invArray.push(inverseElement);
    }
    return invArray;
  }