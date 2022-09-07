let poorCountry = ['Bangladesh', 'Srilanka'];
let richCountry = [...poorCountry, 'America', 'Canada', 'Italy'];
console.log(richCountry);

// Without spread operator
let poorCountry2 = ['Bangladesh', 'Srilanka'];
let richCountry2 = ['America', 'Canada', 'Italy'];

richCountry2.push(poorCountry2);

console.log(richCountry2);