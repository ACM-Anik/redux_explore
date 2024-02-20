let demonSlayers = [
    'Tanjiro',
    'Rengoku',
    'Tengen',
    'Openai',
    'Mitsuri',
    'Shinobu'
];

const hashiras = ['Zenetsu', 'Inoske', ...demonSlayers];

console.log(demonSlayers);
console.log(hashiras);

// Mutation means to edit the data of any array/object etc.

// Changing the data of any array/object etc. might cost huge data loss. So redux use immer type of system to preserve earlier data and make a new data.