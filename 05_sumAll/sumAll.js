const sumAll = function(initialNum, finalNum) {
    var newArr = [];
    var newNum = 0;

    for (var i = initialNum; i <= finalNum; i++) {
        newArr.push(i)
    }

    for (var i = 0; i <= newArr.length; i++) {
        newNum += newArr[i];
    }
    return newNum;
};

// Do not edit below this line
module.exports = sumAll;
