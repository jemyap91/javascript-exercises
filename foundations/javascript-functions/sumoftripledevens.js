function tripleEvens(num) {
    if (num % 2 === 0) {
        return num * 3;
    }
    else {
        return num
    }
};

const arr = [1, 2, 3, 4, 5];

tripled_arr = arr.map(tripleEvens)
console.log(tripled_arr)
sum_tripled_array = tripled_arr.reduce((acc, curr) => acc + curr)
console.log(sum_tripled_array)