function sumArray(newarray) {
    let totalSum = 0;
    // for (let i = 0; i < newarray.length; i++) {
    //     totalSum += newarray[i];
    // }

    for (let element of newarray) {
        totalSum += element;
    }

    return totalSum;
}

sumArray([1,2,3]) 