function sameXOAmount(str) {
    var xChar = 'x';
    var oChar = 'o';

    var xAmount;
    var oAmount = xAmount = 0;
    var charArray = str.split('');
    charArray.forEach((item) => {
        if (item.toLowerCase() === xChar) {
            xAmount++;
        }

        if (item.toLowerCase() === oChar) {
            oAmount++;
        }
    });

    return xAmount === oAmount;
}