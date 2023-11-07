// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let totalSum = 0;
    for (element of arr) {
        if (element >= 0) {
            totalSum += element;
        }
    }
    return totalSum;
}