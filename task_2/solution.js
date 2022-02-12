function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    // создайте переменную shippingSum

    // если productsSum равно 0,
    // то shippingSum присвоить значение 0

    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0

    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    let shippingSum
    if (productsSum == 0 || productsSum >= freeShippingMinSum) {
        shippingSum = 0;
    }

    else if (productsSum > 0 && productsSum < freeShippingMinSum) {
        shippingSum = shippingPrice;
    }

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    let discountSum;
    if (productsSum >= discountMinSum) {
        discountSum = discountPart / 100 * productsSum;
    }
    else if (productsSum < discountMinSum) {
        discountSum = 0;
    }
    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    let totalSum;
    totalSum = productsSum;
    totalSum = totalSum - discountSum;

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = totalSum + shippingSum;

    let freeShipping;
    (shippingSum == 0) ? freeShipping = true : freeShipping = false;

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
