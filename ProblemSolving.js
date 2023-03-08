// First problem 
/*
    Description: 
    This is function take a input. 
    And Make Sub Arithmatic Operation Finally Return a Result.
*/
function mindGame(positiveNumber) {
    if (positiveNumber > 0) {
        const product = positiveNumber * 3;
        const sum = product + 10;
        const div = sum / 2;
        const sub = div - 5;
        return sub;
    }
    else {
        return "Invalid! Please Enter a Positive Number.";
    }

}


// Second Problem 
/*
    Description: 
    This is a Function. Take Input as a String Type. 
    Then find its Length and Check size Even or Odd; 
*/
function evenOdd(str) {
    if (isNaN(str)) {
        const size = str.length;
        if (size % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    else {
        return "Invalid! Please Enter String.";
    }
}

// Third Problem 
/*
    Description: 
    This is a Function take a number. 
    And Number - 7. 
    if Result is greater than 7 return dif. 
    Otherwise Return  this number multiplied by 2. 
*/
function isLGSeven(number) {
    if (Number.isInteger(number)) {
        const dif = number - 7;
        if (dif < 7) {
            return dif;
        }
        else {
            return number * 2;
        }
    }
    else {
        return "Invalid! Please Enter a Number.";
    }
}

// Fourth Problem 
/*
    Description: 
    This Function take Array.
    And Check exist Negetive Value here. 
    If Exit Negetive Value return Count BadData and Return 
*/
function findingBadData(ageList) {
    if (Array.isArray(ageList)) {
        let badData = 0;
        for (let i = 0; i < ageList.length; i++) {
            const element = ageList[i];
            if (element < 0) {
                badData++;
            }
        }
        return badData;
    }
    else {
        return "This is Not Array. Please Enter a Array";
    }


}


// Fifth Problem 
/*
    Description: 
    This function take 3 Integer value; 
    And Multiplied by Individual number. (21, 32, 43)
    Then Total the Diamond. 
    check Total Diamond are  greater than 1000*2
    Other Wise return total Diamong. 
*/
function gemsToDiamond(gems1, gems2, gems3) {
    if (Number.isInteger(gems1) && Number.isInteger(gems2) && Number.isInteger(gems3)) {
        const diamond1 = gems1 * 21;
        const diamond2 = gems2 * 32;
        const diamond3 = gems3 * 43;
        const totalDiamong = diamond1 + diamond2 + diamond3;

        if (totalDiamong > 1000 * 2) {
            return totalDiamong - 2000;
        }
        else {
            return totalDiamong;
        }
    }
    else
    {
        return "Invalid, Please Enter a Integer Number";
    }

}





// console.log(mindGame(5));
// console.log(mindGame(50));
// console.log(mindGame(33));
// console.log(mindGame(-5));
// console.log(mindGame('a'));


// console.log(evenOdd('Phero'));
// console.log(evenOdd('Batch7'));
// console.log(evenOdd('chatgpt'));
// console.log(evenOdd(5));

// console.log(isLGSeven(6));
// console.log(isLGSeven(-15));
// console.log(isLGSeven(15));
// console.log(isLGSeven('a'));

// const arr1 = [1, 2, 5];
// console.log(findingBadData(arr1));

// const arr2 = [2, -5, -7, -13];
// console.log(findingBadData(arr2));

// const arr3 = [-4, -9, -5, -33, -55];
// console.log(findingBadData(arr3));

// const arr4  ='a';
// console.log(findingBadData(arr4));


// console.log(gemsToDiamond(1, 1, 1));
// console.log(gemsToDiamond(20, 200, 50));
// console.log(gemsToDiamond(100, 5, 1));
