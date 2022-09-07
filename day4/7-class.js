
// class MyClass{
//     MyFun(name){
//         console.log(name)
//     }
//     MyFun1(name){
//         console.log(name)
//     }
//     MyFun2(name){
//         console.log(name)
//     }
// }
//
// var obj = new MyClass;
// obj.MyFun('Bangladesh');
// obj.MyFun1('India');
// obj.MyFun2('Nepal');

/** class Constructor **/
// * Constructor হচ্ছে ক্লাসের নিজেস্ব মেথড/ফাংশন
// * ক্লাস অবজেক্ট তৈরি হলেই, Constructor অটো কল হয়
// * অন্য ফাংশনের মতোই Constructor কাজ করে
// * কিন্তু Constructor রিটার্ন করতে পারে না

// class myClass1 {
//     constructor(x, y) {
//        this.firstNum = x;
//        this.secondNum = y;
//     }
//
//     add(){
//        let result = this.firstNum + this.secondNum;
//         console.log(result)
//     }
//
// }
// var obj = new myClass1(10, 20);
//
// obj.add();



/** Static Keyword **/

// class MyStatic{
//    static hello(){
//         console.log('Hello World')
//     }
// }
//  output error
// var obj = new MyStatic();
// obj.hello()

// MyStatic.hello() // Output Success

/** Class Inheritance **/
// * Parent Class
// * Child Class

    // class Parent{
    //     hello1(){
    //         console.log('Hello 1 function from parent')
    //     }
    //     hello2(){
    //         console.log('Hello 2 function from parent')
    //     }
    // }
    //
    // class Child extends Parent{
    //
    // }
    //
    // var obj = new Child();
    //
    // obj.hello1();
    // obj.hello2();

// Method two
//     class Parent{
//         hello1(){
//             console.log('Hello 1 function from parent')
//         }
//         hello2(){
//             console.log('Hello 2 function from parent')
//         }
//     }
//
//     class Child extends Parent{
//         hello1(){
//             console.log('Hello 1 function from child')
//         }
//     }
//
//     var obj = new Child();
//     obj.hello1();
//     obj.hello2();

/** Super Keyword **/
    class Parent{
        hello1(){
            console.log('Hello 1 function from parent')
        }
        hello2(){
            console.log('Hello 2 function from parent')
        }
    }

    class Child extends Parent{
        demo(){
            super.hello1();
            super.hello2();
        }
    }
    var obj = new Child();

    obj.demo()























