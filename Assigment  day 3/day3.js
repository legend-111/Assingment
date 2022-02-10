//Program to print table of 5 
console.log("--------------------------Program to print table of 5 ----------------------------");
var x = 5;
var y = 1;
while (y <= 10) {
    var multi = x * y;
    console.log(x, '*', y, '=', multi);
    y++;
}


//variable holdind marks of 5 subjects
console.log("------------------------variable holdind marks of 5 subjects-------------------------------");
var english = 70;
var physicaleducation = 60;
var maths = 80;
var chemistry = 65;
var physics = 70;
console.log("Marks in english =", english);
console.log("Marks in physical education =", physicaleducation);
console.log("Marks in maths =", maths);
console.log("Marks in chemistry =", chemistry);
console.log("Marks in physics =", physics);


//Now we are calcualating the percantage of 5 subjects
console.log("------------------P E R C A N T A G E-------------------");
var percantage = (english + physicaleducation + maths + chemistry + physics) / 5;
console.log("Percantage is =", percantage);

