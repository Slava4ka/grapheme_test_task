const EMPTY_FIELD = "Пустое поле";

export const validateStep1 = values => {
    const errors = {};

    if (!values.fullName) {
        errors.fullName = EMPTY_FIELD
    }

    if (!values.town) {
        errors.town = EMPTY_FIELD
    }

    if (!values.address) {
        errors.address = EMPTY_FIELD
    }

    if (!values.country) {
        errors.country = EMPTY_FIELD
    }

    if (!values.index) {
        errors.index = EMPTY_FIELD
    }

    return errors
};

export const validateStep2 = values => {
    const errors = {};

    if (!values.nameOnTheCard) {
        errors.nameOnTheCard = EMPTY_FIELD
    }

    if (!values.cardNumber) {
        errors.cardNumber = EMPTY_FIELD
    }

    if (!values.date) {
        errors.date = EMPTY_FIELD
    }

    if (!values.CVV) {
        errors.CVV = EMPTY_FIELD
    }


    return errors
};