
export const isRequired = (errorMessage) => (input) => {
    return input.length === 0 && errorMessage;
}