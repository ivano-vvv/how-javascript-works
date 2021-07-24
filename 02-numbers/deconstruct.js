function deconstruct(number) {
    // number = sign * coefficient * (2 ** exponent)

    let sign = 1;
    let coefficient = number;
    let exponent = 0;

    if (coefficient < 0) {
        sign = -1;
        coefficient = -coefficient;
    }

    if (Number.isFinite(number) && number !== 0) {
        const MIN_VALUE_EXP = -1128;

        exponent = MIN_VALUE_EXP;
        let reduction = coefficient;

        while (reduction !== 0) {
            exponent += 1;
            reduction /= 2;
        }

        reduction = exponent;

        while (reduction > 0) {
            coefficient /= 2;
            reduction -= 1;
        }

        while (reduction < 0) {
            coefficient *= 2;
            reduction += 1;
        }
    }

    return {
        sign,
        coefficient,
        exponent,
        number,
    };
}

const s = console.log;

s(deconstruct(Number.MAX_SAFE_INTEGER));
s(deconstruct(42));
s(deconstruct(-42));
