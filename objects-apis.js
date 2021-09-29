/*
* Objects, Interfaces, and API's
 */

let dog ={
    name: "steve",
    color: "brown",
    Breed: "pug",
    size: "small",
    bark: function(typeOfBark){
        console.log("bark!");
    },
};

/*...*/
/*...*/

function x(y){
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "tom",
    num: 10,
};
x(y);
console.log(y);
