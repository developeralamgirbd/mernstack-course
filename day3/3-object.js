var billGates = {
    shirt: true,
    shirtColor: 'offWhite',
    smile: true,
    swatter: true,
    swatterColor: 'gray',
    sunGlass: true
}

// console.log(billGates['swatter'])



var billGatesPro={
    0: {
        color: 'offWhite',
        quality: "Good",
        price: '200USD'
    },
    1: {
        color: 'offWhite',
        quality: "Good",
        price: '200USD'
    },
    2: {
        color: 'offWhite',
        quality: "Good",
        price: '200USD'
    }
}

// console.log(billGatesPro['face']['sunGlass']);

for (let item in billGatesPro){
    console.log(' Color: '+billGatesPro[item].color +', Quality: '+billGatesPro[item].quality +', Price: '+billGatesPro[item].price)
}

