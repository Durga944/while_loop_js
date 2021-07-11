// n=int(input("enter any num"))
// x=0
// y=1
// z=0
// while z<=n:
//     print(z)
//     x=y
//     y=z
//     z=x+y
var readlineSync = require("readline-sync");
var num = parseInt(readlineSync.question("enter any num--"))
var x = 0;
var y = 1;
var z = 0;
while(z<=num){
    console.log(z)
    x=y
    y=z
    z=x+y
}