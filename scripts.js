function squareSum(numbers){
    let sumSqrNum = 0;

    /*
    for (let i = 0; i < numbers.length; i++) {
        sumSqrNum += numbers[i];
    }
    return sumSqrNum;
    */


    for (let element of numbers) {
      let powElement = Math.pow(element, 2);;
      sumSqrNum += powElement
    }
    return sumSqrNum;
}