

// Curring is a pattern, not concept

const add = () => {
    return (a) => {
        return (b) => {
            return (c) => {
                return a + b + c;
            }
        }
    }
};

const result = add(1)(2)(3);

console.log(result);
// Output: 6

// different
const add2 = () => {
    return (a) => {
        return (b) => {
            return (c) => {
                return a * (b + c);
            }
        }
    }
};
const level = add2(5);
const result2 = level(2)(3);

console.log(result2);
// Output: 25