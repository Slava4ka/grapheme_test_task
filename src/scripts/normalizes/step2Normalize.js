export const normalizeCardNumber = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length < 4) return onlyNums;
    if (onlyNums.length === 4) return onlyNums + " ";

    if (onlyNums.length < 8) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4);
    if (onlyNums.length === 8) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8);

    if (onlyNums.length < 12) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8);
    if (onlyNums.length === 12) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12);

    if (onlyNums.length < 16) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12)
        + " " + onlyNums.slice(12);
    if (onlyNums.length === 16) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12)
        + " " + onlyNums.slice(12, 16);

    if (onlyNums.length < 20) return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12)
        + " " + onlyNums.slice(12, 16) + " " + onlyNums.slice(16);

    return onlyNums.slice(0, 4) + " " + onlyNums.slice(4, 8) + " " + onlyNums.slice(8, 12)
        + " " + onlyNums.slice(12, 16) + " " + onlyNums.slice(16, 20);

};

export const normalizeDate = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length === 1) {
        if (Number.parseInt(onlyNums) > 1) {
            return 1
        } else return onlyNums
    }

    if (onlyNums.length === 2) {
        if (Number.parseInt(onlyNums[1]) === 0) {
            return onlyNums.slice(0, 1) + "1 / "
        } else if (Number.parseInt(onlyNums) <= 12) {
            return onlyNums + " / "
        } else {
            return "12 / "
        }
    }

    if (onlyNums.length === 3) {
        return onlyNums.slice(0, 2) + " / " + onlyNums.slice(2)
    }
    return onlyNums.slice(0, 2) + " / " + onlyNums.slice(2, 4)
};

export const normalizeCVV = (value, previousValue) => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length < 3) {
        return onlyNums
    }

    return onlyNums.slice(0, 3)
};