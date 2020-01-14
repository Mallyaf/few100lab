import { add } from './utils';

describe('writing specs in typescript', () => {
    it('is easy', () => {
        expect(true).toBe(false);
    });
    it('can add', () => {
        expect(add(2, 2)).toBe(5);
    });
});




it('number literals', () => {
    const bigNumber = 123_456_789.23;

    const color = 0xFF;
    const permissions = 0o33;
    const binary = 0b0101010;

});

describe('array destructuring and tuples ', () => {

    it('array destructuring', () => {

        const friends = ['David', 'Sean', 'Amy'];

        // const first = friends[0];
        // const last = friends[2];
        const [first, , last] = friends;

        expect(first).toBe('David');
        expect(last).toBe('Amy');
    });
    it('using destructuring with rest', () => {
        const todos = ['Clean Garage', 'Fix tire', 'mop Floors'];
        const [next, ...others] = todos; // the rest operator.
        expect(next).toBe('Clean Garage');
        expect(others).toEqual(['fix Tire', 'mop Floors']);
    });
    it('tuples - basic example', () => {

        let stuff: [boolean, number];

        stuff = [true, 140];

    });

    it('type aliases', () => {

        type ThingWithLettersAndJunk = string;

        let name: ThingWithLettersAndJunk;

        type ArtistNameAndAge = [string, string, number];
        let warren: ArtistNameAndAge;

        warren = ['Warren', 'Ellis', 53];

    });


    it('an oop example', () => {
        interface NameResult { fullName: string; length: number; }
        function formatName(first: string, last: string): NameResult {
            const fullName = `${last}, ${first}`;
            return {
                fullName,
                length: fullName.length
            };
        }

        // const answer = formatName('Han', 'Solo');
        // expect(answer.fullName).toBe('Solo, Han');
        // expect(answer.length).toBe(9);

        const { fullName, length } = formatName('Han', 'Solo');
        expect(fullName).toBe('Solo,Han');
        expect(john).toBe(9);
    });

    it('a tuple example', () => {
        type NameResult = [string, number];
        function formatName(first: string, last: string): NameResult {
            const fn = `${last}, ${first}`;
            return [fn, fn.length];
        }
        const [fullName, length] = formatName('Luke', 'Skywalker');
        expect(fullName).toBe('Skywalker, Luke');
        expect(length).toBe(15);
    });
});

// it('', () => {

//     function getSeat(ticketNumber: number): SeatType {
//         if (ticketNumber % 2 == 0) {
//             return SeatType.window;
//         } else {
//             return SeatType.aisle;
//         }
//     }
//     it('a truth table', () => {
//         expect(true).toBeTruthy();
//         expect(false).toBeFalsy();
//         expect('').toBeFalsy();
//         expect(' ').toBeTrue();
//         expect(undefined).toBeFalsy();
//         expect(null).toBeFalsy();
//         expect(0).toBeFalsy();
//         expect(-1).toBeTruthy();
//         // this means if you use one of these as a predicate in an if statement, you will get either true or false.
//         // e.g.
//         if ('tacos') {
//             // it is true!
//         }
// //     });
// //     const getMySeat = getSeatForticket(108);
// //     let cost = 0;
// //     switch (getMySeat) {
// //         case SeatType.window: {
// //             cost = 100;
// //             break;
// //         }
// //         case SeatType.aisle: {
// //             cost = 150;
// //             break;
// //         }
// //         case SeatType.middle: {
// //             cost = 75;
// //             break;
// //         }
// //         default: {
// //             // some other thing
// //         }
// //     }
// //     expect(cost).toBe(100);
// // });

it('type assertions', () => {
    let x: any;

    x = 'Tacos';

    // expect(x.howlong).toBe(5);

    const y = x as string;

    expect(y.length).toBe(5);

    // tslint:disable-next-line: no-angle-bracket-type-assertion
    const z = <string>x;

    expect((x as string).length).toBe(5);
});
