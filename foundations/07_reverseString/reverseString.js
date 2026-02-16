const reverseString = function(str) {
    reverse_string = '';
    for (let i=str.length-1; i>=0; i--) {
        reverse_string += str[i]
    }
    return reverse_string

};

// Do not edit below this line
module.exports = reverseString;
