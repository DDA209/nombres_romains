function parseToRoman(num) {
    let equivalences = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    let result = 'Supérieur à 9';

    const arrNum = num.toString().split('');
    const numLength = arrNum.length;

    console.log ('chiffre', arrNum);
    console.log ('longueur', numLength);
    
    if (numLength === 1) {
        let arrLogic = getLogical(num);
        let pos0 = equivalences[numLength].repeat(arrLogic[0]);
        let pos1 = equivalences[numLength - 1].repeat(arrLogic[1]);
        let pos2 = equivalences[numLength].repeat(arrLogic[2]);
        let pos3 = equivalences[numLength + 1].repeat(arrLogic[3]);

        let arrResult =  [pos0 ,pos1, pos2, pos3];
        console.log('arrResult', arrResult);
        result = arrResult.join('');
    }

    // console.log (numLength);

    return result;
}


function getLogical(digit) {
    result = [0, 0, 0, 0];
  
    if (digit < 4){
        result = [0, digit, 0, 0];
    };

    if (digit === 4){
        result = [0, digit - 3, 1, 0];
    };

    if (digit > 4 && digit < 9){
        result = [1, digit - 5, 0, 0];
    };

    if (digit === 9){
        result = [0, digit - 8, 0, 1];
    };

    console.log('getLogical', result);
    return result
}

let num1 = 4;
let num2 = 37;
let num3 = 143;
let num4 = 1234;
let num5 = 6;
let num6 = 3;
let num7 = 9;
let num8 = 1;
let num9 = 0;
let num10 = 10;

console.log (num1, ' = ', parseToRoman(num1));
console.log (num2, ' = ', parseToRoman(num2));
console.log (num3, ' = ', parseToRoman(num3));
console.log (num4, ' = ', parseToRoman(num4));
console.log (num5, ' = ', parseToRoman(num5));
console.log (num6, ' = ', parseToRoman(num6));
console.log (num7, ' = ', parseToRoman(num7));
console.log (num8, ' = ', parseToRoman(num8));
console.log (num9, ' = ', parseToRoman(num9));
console.log (num10, ' = ', parseToRoman(num10));