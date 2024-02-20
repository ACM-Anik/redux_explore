import { produce } from "immer"

let demonSlayers = [
    'Tanjiro',
    'Rengoku',
    'Tengen',
    'Openai',
    'Mitsuri',
    'Shinobu'
];
const nextState = produce(demonSlayers, draft => {
    draft.push('zenetsu', { title: "Tweet about it" }, ['phone', 'laptop', 'computer'], 'chainsaw');
});

console.log(demonSlayers);
console.log(nextState);

// Output:---
['Tanjiro', 'Rengoku', 'Tengen', 'Openai', 'Mitsuri', 'Shinobu'];
[
    'Tanjiro',
    'Rengoku',
    'Tengen',
    'Openai',
    'Mitsuri',
    'Shinobu',
    'zenetsu',
    { title: 'Tweet about it' },
    ['phone', 'laptop', 'computer'],
    'chainsaw'
]
