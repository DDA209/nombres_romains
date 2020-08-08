function parseToRoman(num) {

    let result = '';

    let equivalences = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    const arrStrNum = num.toString().split('').reverse();
    const arrNum = arrStrNum.map( e => parseInt(e));
    const numLength = arrNum.length;

    // console.log ('Array', arrStrNum, '-> chiffre', arrNum, '/ longueur', numLength);
    
    for (let i = 0; i < numLength; i++) {
        let cond = true;
        let digit = arrNum[i];
        let j = i;
        // console.log('parseToRoman arrNum[i]', arrNum[i], 'index', i);

        if ( i >= 3 ){
            cond = false;
            j = 3;
        }

        // console.log(num, '< 1000 :', cond, "- i =", i, "et j =", j);
        // console.log('Math.pow(10, j - i) =', Math.pow(10, i - j));

        let arrLogic = getLogical(digit * (Math.pow(10, i - j)), cond );
        let pos0 = cond ? equivalences[ 2 * j + 1].repeat(arrLogic[0]) : '';
        let pos1 = equivalences[ 2 * j ].repeat(arrLogic[1]);
        let pos2 = cond ? equivalences[ 2 * j + 1].repeat(arrLogic[2]) : '';
        let pos3 = cond ? equivalences[ 2 * j + 2 ].repeat(arrLogic[3]) : '';

        let arrResult =  [pos0 ,pos1, pos2, pos3];
        // console.log('arrResult', arrResult);
        result = arrResult.join('') + result;

    }

    return result;
}

function getLogical(digit, cond) {

    result = [0, 0, 0, 0];
  
    if (digit < 4){
        result = [0, digit, 0, 0];
    };

    if (digit === 4 && cond){
        result = [0, 1, 1, 0];
    };

    if (digit > 4 && digit < 9 && cond){
        result = [1, digit - 5, 0, 0];
    }
    
    if (digit === 9  && cond){
        result = [0, 1, 0, 1];
    }

    if (digit >= 4 && !cond) {
        result = [0, digit , 0, 0];
    }

    // console.log('getLogical type digit', typeof digit, '- getLogical', result);
    return result;
}

let nums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    0,
    37,
    143,
    1234,
    2020,
    9999,
    10001,
    44444,
];

nums.forEach(element => {
    console.log (element, ' = ', parseToRoman(element));    
});