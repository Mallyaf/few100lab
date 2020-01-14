// funtional problems
describe('funtions', () => {
    describe('delcaring the', () => {
        it('has about three different ways to do it.', () => {
            // 1.Name Function
            function add(a: number, b: number) {
                return a + b;
            }
            // 1.Anonymous Funtion
            const substract = function (a: number, b: number) {
                return a = b;
            };
            const multiply = (a: number, b: number) => a * b;
            expect(substract(10, 2)).toBe(8);
            expect(multiply(3, 3)).toBe(8);
        });

        it('details of arrow funtions', () => {
            const getMessage = () => 'Howdy!';
            expect(getMessage()).toBe('Howdy!');
            const logIt = (message: string) => {
                console.log(message);
                return 'Logged It';
            };
            expect(logIt('Pizza')).toBe('Logged It!');

        });
    });
    describe('arhuments to funtions', () => {
        it('does not have overloading', () => {
            function formatName(first: string, last: string, mi?: string) {
                let firstPart = `${last} , ${first}`;
                if (mi) {
                    firstPart += `${mi}.`;
                }
                return firstPart;
            }
            expect(formatName('Han', 'Solo')).toBe('Solo , Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han');
        });

        it('default values for parameters', () => {
            //  if you dont give me a , I'm going to used  and then c
            function add(a: number = 15, b: number = 10) {
                return a + b;
            }

            expect(add(2, 2)).toBe(4);
            expect(add(12)).toBe(22);
            // a = 15 + 12 = 27  -- a in undefined
            expect(add(undefined, 12)).toBe(27);
        });

        it('you can use that rest opertaor things', () => {
            // high order-function
            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }
            expect(add(2, 2)).toBe(4);
            // miny numbers as you want
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 8)).toBe(45);
        });
    });

    describe('higher order functions', () => {
        // funtion that takes one or more arguments that are funtions and /or
        // return a funciton

        it('the basic syntax', () => {
            // high order-function
            function logItOut(message: string) {
                console.log(`At ${new Date().toISOString}:${message}`);
            }
            logItOut('Tacos!!!');

        });
        describe('higher order functions', () => {
            // A function that takes one or more arguments that are functions and/or
            // return a function
            it('the basic syntax', () => {

                type StringModifier = (msg: string) => string;
                function logItOut(message: string, f: StringModifier) {
                    console.log(`At ${new Date().toISOString()}: ${f(message)}`);
                }

                logItOut('Tacos', (s: string) => s.toUpperCase());

                function decorate(x: string) {
                    return `***${x}***`;
                }

                logItOut('Burrito', decorate);
            });

            describe('HOF that returns a function', () => {

                it('with just a normal ', () => {
                    // <element>content</element>

                    function tagMaker(element: string, content: string) {
                        return `<${element}>${content}</${element}>`;
                    }

                    expect(tagMaker('customer', 'Bob Smith')).toBe('<customer>Bob Smith</customer>');
                    expect(tagMaker('customer', 'Sue Jones')).toBe('<customer>Sue Jones</customer>');
                });

                it('oop version', () => {

                    class TagMaker {
                        private element: string;

                        constructor(element: string) {
                            this.element = element;
                        }

                        make(content: string) {
                            return `<${this.element}>${content}</${this.element}>`;
                        }

                    }

                    const customerMaker = new TagMaker('customer');

                    expect(customerMaker.make('Bob Smith')).toBe('<customer>Bob Smith</customer>');


                });

                it('how a functional programmer would do it.', () => {

                    function tagMaker(element: string) {
                        return (content: string) => `<${element}>${content}</${element}>`;
                    }

                    const customerMaker = tagMaker('customer');

                    expect(customerMaker('Bob Smith')).toBe('<customer>Bob Smith</customer>');
                });

            });
        });

