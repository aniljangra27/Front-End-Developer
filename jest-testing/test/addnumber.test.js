// const {default: TestRunner} = require("jest-runner"); // optional
const addNumber = require(`../addNumber`); // it represents where the file exits

it('add two numner',() => {
    expect(addNumber(2,2)).toBe(4);
})

test('add number return 8', () => {
    expect(addNumber(4,4)).toBe(8);
})