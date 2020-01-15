describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('checkig the membership of an array'), () => {
        const someEvens = number.every(isEven);
    };
});

describe('two loops you might use but probably wont', () => {
    it('for in loop', () => {
        const book = {
            title: 'Hyperobjects',
            author: 'Morton'
        };
        for (const prop in book) {
            console.log(`Book's ${prop} is ${book[prop]}`);
        }
    };
});

it('for of loop', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let total = 0;
    for (const n of numbers) {
        total += n;

    }
    expect(total).toBe(45);
});
})
