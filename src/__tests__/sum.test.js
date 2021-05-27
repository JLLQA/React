const sum = require('../Components/11_Testing/Calculator/sum');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

const sub = require('../Components/11_Testing/Calculator/sub');
test('subs 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
});

const mul = require('../Components/11_Testing/Calculator/mul');
test('mul 2 * 2 to equal 4', () => {
    expect(mul(2, 2)).toBe(4);
});

const div = require('../Components/11_Testing/Calculator/div');
test('adds 4 / 2 to equal 2', () => {
    expect(div(4, 2)).toBe(2);
});