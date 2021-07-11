var readlineSync = require("readline-sync");
var num = parseInt(readlineSync.question("enter the num:--"))
var sum=0;
var i=1;
while(i<num){
    if(num%i==0){
        sum=sum+i
    };
    i++
};
if(num==sum){
    console.log("perfect")
}
else{
    console.log("not perfect")
};