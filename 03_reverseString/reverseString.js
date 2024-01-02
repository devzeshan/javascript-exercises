const reverseString = function(str) {
    tofillStr = '';
    for (var i = str.length; i => 0; i--) {
        tofillStr += str[i];
    }
    return tofillStr;

};

console.log(reverseString('hi'));

// Do not edit below this line
module.exports = reverseString;
