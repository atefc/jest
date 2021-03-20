function sum(numbers){
    let sum = 0;
    numbers.forEach(number => sum+=number);
    return sum;
}
const result = sum([1,2,4,10]);
console.log(result);
module.exports = sum;