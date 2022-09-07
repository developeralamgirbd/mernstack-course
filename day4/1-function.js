// 5. Anonymous Function
// 6. Parameterized Anonymous Function
// 7. Arrow Function
// 8. The Function Constructor

/** Anonymous Function **/
// method one...........
// var oneFun = function (){
//     return 'Hello';
// }
// console.log(oneFun());

// Method Two.........
// var twoFun = function (x){
//     return x;
// }
// console.log(twoFun('Hello'));

// Method Three..........
// var threeFun = function (...x){
//     return x;
// }
// console.log(threeFun(1,2,5,8,5,4,))


// Method Four..........
// var fourFun = function (){
//     return 'Hello';
// }
// var fourFun = function (){
//     return 'Hello Again';
// }
//
// console.log(fourFun())


/** Arrow Function **/
// Method one
// var arrowFun = ()=>{
//     console.log('My first arrow function')
// }
// arrowFun()


// Method two
// var two = (x)=>{
//     console.log(x)
// }
// two('My first arrow function')


// Method three
// var three = (...x)=>{
//     console.log(x)
// }
// three(1,8,5,4,7,4,5,4,)


// Method four
var four = ()=>{
    return 'Hello World'
}
console.log(four())