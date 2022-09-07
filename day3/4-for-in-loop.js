var billGates = {
    shirt: true,
    shirtColor: 'offWhite',
    smile: true,
    swatter: true,
    swatterColor: 'gray',
    sunGlass: true
}

for (let props in billGates){
    console.log('Property: '+props + ', Value: '+billGates[props])
}