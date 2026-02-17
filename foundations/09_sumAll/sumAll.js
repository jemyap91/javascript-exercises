const sumAll = function(min, max) {
    
  if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) {
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
