

test("One euro should be 1.206 dollars", () => {
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test('2 euro should be 1.6666666666666667 dollars', () => {
    const { fromDollarToEuro } = require('./app.js');
    const result = fromDollarToEuro(2);
    expect(result).toBe(1.6666666666666667);

})

test('2 dollar should be 177.6388888888889 yen', () => {
    const { fromDollarToYen } = require('./app.js');
    const result = fromDollarToYen(2);
    expect(result).toBe(213.16666666666669);
})

test('123 Yen should be 0,9616888193901485 euros', () => {
    const { fromYenToEuro } = require('./app.js');
    const result = fromYenToEuro(123);
    expect(result).toBe(0.9616888193901485);
})

test('123 Euros should be 0.7693510555121188 Pounds', () => {
    const { fromYenToPound } = require('./app.js');
    const result = fromYenToPound(123);
    expect(result).toBe(0.7693510555121188);
})