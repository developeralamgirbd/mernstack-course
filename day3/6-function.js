// ES6 Function

// 1. Simple Function
// 2. Parameterized Function
// 3. Rest Parameters Function
// 4. Returning Function
// 5. Anonymous Function
// 6. Parameterized Anonymous Function
// 7. Arrow Function
// 8. The Function Constructor


// Simple Function
// function simpleFun(){
//     var x = 10;
//     var y = 10;
//     var z = x+y;
//     console.log(z);
// }
// simpleFun();



// Parameterized Function
// function ParameterizedFun(x, y){
//     var z = x+y;
//     console.log(z);
// }
// ParameterizedFun(10,20);


// Rest Parameters Function
// function restParametersFun(...x){
//     console.log(x[8]);
// }
// restParametersFun(10,20,50,600,400, 'A','B','C','D');


// Returning Function
// Method One
function returnFunOne(){
    return 20;
}
function returnFunTwo(){
    return 30;
}
console.log(returnFunOne() + returnFunTwo())

// Method Two
function returnFunThree(){
    return 20;
}
function returnFunFour(){
    return returnFunThree();
}
console.log(returnFunFour())