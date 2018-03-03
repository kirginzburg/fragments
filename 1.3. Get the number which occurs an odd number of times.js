function findOddAmount(numbers) {
    var result = 0;

    numbers.forEach((item) => {
        result = result ^ item;
    });
    
    return result;
}