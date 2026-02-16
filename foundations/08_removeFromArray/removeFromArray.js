const removeFromArray = function(array, ...args) {
    return array.filter(items => !args.includes(items))
};

// Do not edit below this line
module.exports = removeFromArray;
