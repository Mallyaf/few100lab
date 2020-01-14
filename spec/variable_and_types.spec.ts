describe('declaring variable', () => {
    it('an axample', () => {
        const name = 'Bob';
        expect(name).toBe('Bob');
    });
    it('what happend above?', () => {
        const name = 'Carl';
    });

    it('declaring  a variable with let', () => {
        let age: number | string;
        age = 50;
        age = 51;
        age = 'Old';

        // not spefic datatype  is any

        let x: any;
        x = 'dog';
        x = 34;
        x = [];

        // function add(a: any, b: any);
        // {
        //     return a + b;
        // }
    });

    it('iinitializationg a variable defines (infers) the type', () => {
        let name = 'Bob';
        // let name  : number | string ;
        name = 'Bob';
        name = 'Steve';
        name = 'Kara';
        // name = 1138 Error! It is inferred to be a string  becuase we created it that way
    });
    describe('a bit about string', () => {
        it('can be delimited with single or double', () => {
            const name = 'Bob';
            // ts
            expect(name).toBe('Bob');
            const story = 'She said "Hello! How is your day going?" on; the; way; out; the; door.; ';

            // tslint:disable-next-line: quotemark
            const author = 'Flannery O\'Conner';
            const author2 = 'Flannery O\'Connor';

        });
        it('string literals - interpreted string', () => {
            const name = 'Bob';
            expect(name).toBe('Bob');
            const story = `Chapter 1
            It was a derk and story night.
            the End`;

            const age = 27;

            // tslint:disable-next-line: no-unused-expression
            const message = `The name is ` + name; + `and the age is ` + age + '.';

            const message2 = `he name is ${name} and the age is '${age}.`;

            expect(message).toBe(message2);

            const newElement = `<div>
            <h2> ${name} is ${age} </h2>
            </div>`;

            // string thing = $"The name is {name} and the age is "

            it('const - be careful', () => {
                const x = 12;

                // const favoritNumbers = [2, 4, 9, 20];
                // const favoritNumbers : (string|number) [] = [2, 4, 9, 20];
                const favoritNumbers: Array<string | number> = [2, 4, 9, 20];
                favoritNumbers[2] = 10;
                console.log(favoritNumbers);
                const movie = {
                    title: 'The Rise of skywalker',
                    yearRelease: 2020
                };
                movie.yearRelease = 2019;

                console.log(favoritNumbers);
                interface Movie {
                    title: string;
                    yearReleased?: number;
                }

                const otherMovie: Movie = {
                    title: 'TH';
                    yearRelease?number
                };

            });
        });

