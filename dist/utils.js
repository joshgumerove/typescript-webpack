import _ from "lodash";
export function add(x, y) {
    return _.add(x, y); // just to introduce dependency
}
export function multiply(x, y) {
    return x * y;
}
export function divide(x, y) {
    return x / y;
}