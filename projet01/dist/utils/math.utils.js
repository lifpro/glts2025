"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = void 0;
exports.addition = addition;
exports.multiplication = multiplication;
exports.calculateAge = calculateAge;
const number_error_1 = require("../errors/number.error");
exports.pi = 3.14;
function addition(a, b) {
    return a + b;
}
function multiplication(a, b) {
    return a * b;
}
function calculateAge(age) {
    if (age < 18) {
        throw new number_error_1.NumberError("L'age n'est pas valides", 455);
    }
    console.log("Age valide");
}
