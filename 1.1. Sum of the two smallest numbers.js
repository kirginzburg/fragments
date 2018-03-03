function sumSmallestNumbers(numbers) {
    var smallest1; 
    var smallest2 = smallest1 = numbers[0];
    var temp;

    numbers.forEach((item) => {
        if (item < smallest2) {
            smallest2 = item;
        }

        if (smallest2 < smallest1) {
            temp = smallest1;
            smallest1 = smallest2;
            smallest2 = temp;
        }
    })
    
    return smallest1 + smallest2;
}