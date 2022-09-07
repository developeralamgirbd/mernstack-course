// method one (better than tow method)
var mySet = new Set();

mySet.add('Bangladesh');
mySet.add('India');
mySet.add('India');
mySet.add('Nepal');
mySet.add('Bhutan');
mySet.add('Maldiv');
mySet.add('Maldiv');
mySet.add('China');

// console.log(mySet)

// method two
// var mySet = new Set(['A', 'B', 'C', 'D']);
// console.log(mySet)

/** set methods **/
// 1. .clear()
// 2. .delete()
// 3. .has()
// 4. .values()
// 5. Set.size

// clear
// mySet.clear();
// console.log(mySet)

// delete
// mySet.delete('Nepal');
// console.log(mySet) // remove Nepal

// size
// console.log(mySet.size) // total size

// values
// console.log(mySet.values()) // get values

// has
if (mySet.has('Maldiv')){
    console.log('Yes')
}else {
    console.log('No')
}
























