module.exports = function toReadable(number) {
    let dg = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let tn = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tw = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if(number < 10) {
        return dg[number];
    }
    if(number > 9 && number < 20) {
       let tens = number.toString().slice(1, 2);
        return tn[tens];
    }
    if(number >= 20 && number < 100) {
        let firstNum = number.toString().slice(0, 1);
        let secondNum= number.toString().slice(1, 2);
        if(secondNum === '0') {
            return tw[firstNum];
        }
        return `${tw[firstNum]} ${dg[secondNum]}`;
    }
    if(number >= 100 && number < 1000) {
        let zero = number.toString().split('');
        let firstNum = number.toString().slice(0, 1);
        let secondNum= number.toString().slice(1, 2);
        let therdNum = number.toString().slice(-1);

        if(zero[1] === '0' && zero[2] === '0') {
            return dg[firstNum] + ' hundred';
        }
        if(zero[1] === '0') {
           return dg[firstNum] + ' hundred ' + dg[therdNum];
        }
        if(zero[1] === '1') {
            return dg[firstNum] + ' hundred ' + tn[therdNum];
        }
         if(zero[2] === '0') {
            return dg[firstNum] + ' hundred ' + tw[secondNum];
         }
         
         return dg[firstNum] + ' hundred ' + `${tw[secondNum]} ${dg[therdNum]}`;
    }
};
