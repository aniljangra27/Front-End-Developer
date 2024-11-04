const {default: TestRunner} = require("jest-runner");
const addNumber = require(`../addNumber`); // it represents where the file exits

test('add two numner',() => {
    expect(addNumber(2,2)).toBe(4);
})

test('add number return 8', () => {
    expect(addNumber(4,4)).toBe(8);
})