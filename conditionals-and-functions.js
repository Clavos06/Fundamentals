

// Equals
let equals = 1 === 1;

//greater than
let greaterthan = 5 > 1;

//less than
let lessthan = 2 < 10;

//greater than equals
let greaterthaneq = 5 >= 5;

//less than equals
let  lessthaneq = 4 <= 9;

//not equals
let notequals = 5 !== 2;

let storeA = 1.40
let storeB = 3.40

/*...*/
/*...*/
/*...*/

function comparestoreprices (storeA, storeB) {
    let storeAIslower = storeA < storeB;
    if (storeAIslower) {
        console.log("store A has a lower price.")
    }else if (storeB < storeA) {
        console.log("store B has a lower price.")
    } else{
        console.log("thier prices are equal.")
    }
}

comparestoreprices(10, 5)

function SquareNum (number) {
    let Squared = number * number;
    return squared;
}

let squarednumber = squarenum(10);
console.log(squarednumber);

/*...*/
/*...*/
/*...*/

let x = 10;

function addnumbers (n,m,x) {
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addnumbers(1, 2, 10);

/*...*/
/*...*/
/*...*/
/*...*/

//              0, 1, 2, 3, 4, 5, 6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
    //console.log ("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log('j is equal to: ' + j);
    }
}

/*...*/
/*...*/
/*...*/
/*...*/

/*...*/

let x = 0;
while (x < 10) {
    console.log('ran');
    x = x + 1;
}

