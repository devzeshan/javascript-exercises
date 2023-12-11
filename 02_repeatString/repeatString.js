const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
    const arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(str);
    }
    return newArr = arr.join("");
}
}


// Do not edit below this line
module.exports = repeatString;
