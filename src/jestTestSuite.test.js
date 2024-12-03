const { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } = require('./jestTestSuite');

test('Capitalize star to Star', () => {
    expect(capitalize('star')).toEqual('Star');
})

test('Reverse star to rats', () => {
    expect(reverseString('star')).toEqual('rats');
})

test('Add 1 and 2 to equal 3', () => {
    expect(Calculator.add(1, 2)).toEqual(3);
})

test('Subtract 1 and 2 to equal -1', () => {
    expect(Calculator.subtract(1, 2)).toEqual(-1);
})

test('Multiply 1 and 2 to equal 2', () => {
    expect(Calculator.multiply(1, 2)).toEqual(2);
})

test('Divide 1 and 2 to equal 0', () => {
    expect(Calculator.divide(1, 2)).toEqual(0.5);
})

test('Caesar AB,YZ 3', () => {
    expect(caesarCipher('AB,YZ', 3)).toEqual('DE,AB');
})

test('Analyze Array [1,2,3]', () => {
    expect(analyzeArray([1,2,3]).min).toEqual(1);
})