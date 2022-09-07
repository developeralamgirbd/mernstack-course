

function calculation(a,b,...numbers){
    let sum = 0;
    for (let i of numbers){
        sum=sum+i;
    }
    console.log('a='+a,'b='+b, sum);

}

calculation(1,2,3,4,5,8,15)