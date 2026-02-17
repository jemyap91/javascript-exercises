const sumAll = function(min, max) {
    if (max < 0 || min < 0) {
        return 'ERROR';
    }

    if (typeof min !== "number" || typeof max !== "number") {
        return 'ERROR';
    }

    if (!Number.isInteger(min) || !Number.isInteger(min)) {
        return 'ERROR';
    }
    
    else if (min < max) {
        let sum = 0
        for (let i = min; i<=max; i++) {
            sum += i
        }
        return sum;
    }
    else if (max < min) {
        let sum = 0
        for (let i = max; i<=min; i++) {
            sum += i
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
