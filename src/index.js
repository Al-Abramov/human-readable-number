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
    if (number < 10) {
        return dg[number];
    }
    if (number > 9 && number < 20) {
        let res = number.toString().split("").splice(1, 1);
        return tn[res];
    }
    if (number >= 20 && number < 100) {
        let res1 = number.toString().split("");
        let res2 = number.toString().split("").splice(1);
        if (res2[0] === "0") {
            return tw[res1[0]];
        } else {
            return `${tw[res1[0]]} ${dg[res2]}`;
        }
    }
    if(number >=100 && number < 1000) {
        let firstNum = number.toString().split('').splice(0,1);
        let secNum = number.toString().split('').splice(1,1,1)
        let lastNum = number.toString().split('').splice(2,1);
        if(secNum[0] === '0' && lastNum[0] === '0'){
            return dg[firstNum] + ' hundred';
        }
        if(secNum[0] === '0') {
            return dg[firstNum] + ' hundred ' + dg[lastNum];
        }
        if(secNum[0] === '1') {
            return dg[firstNum] + ' hundred ' + tn[lastNum];
        }if(lastNum[0] === '0'){
            return dg[firstNum] + ' hundred ' + tw[secNum]
        }else {
        return dg[firstNum] + ' hundred ' + `${tw[secNum]} ${dg[lastNum]}`;
        }
    }
};
