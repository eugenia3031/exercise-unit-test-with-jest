// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToEuro = function (valueInDollar) {
    let valueInEuro = valueInDollar/oneEuroIs.USD;
    return valueInEuro;
}

const fromDollarToYen = function (valueInDollar) {
    const valueInEuro = fromDollarToEuro(valueInDollar);
    const valueinYen = valueInEuro * oneEuroIs.JPY;
    return valueinYen;
}

const fromYenToEuro = function (valueInYen) {
    let valueInEuro = valueInYen/oneEuroIs.JPY;
    return valueInEuro;
}

const fromYenToPound = function (valueInYen) {
    const valueInEuro = fromYenToEuro(valueInYen);
    const valueinPound = valueInEuro * oneEuroIs.GBP;
    return valueinPound;
}


module.exports = { fromEuroToDollar, 
            fromDollarToEuro, 
            fromDollarToYen,
            fromYenToEuro,
            fromYenToPound };