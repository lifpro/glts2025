"use strict";
// let e1: Employees = new Employees("001", "FAROTA", "Ibrahima", 26, "M");
// e1.embaucher(new Date(2025, 1, 1), 2000000);
// e1.afficherFiche();
// console.log(math.pi);
// console.log(math.addition(4, 5));
// console.log(math.multiplication(4, 5));
// console.log(c(4, 5));
Object.defineProperty(exports, "__esModule", { value: true });
const number_error_1 = require("./errors/number.error");
const math_utils_1 = require("./utils/math.utils");
// import { addDays, format } from "date-fns";
// import { fr } from "date-fns/locale";
// const aujourHui: Date = new Date();
// const dateExamen: Date = addDays(aujourHui, 5);
// console.log(` Aujourdhui on est le ${format(aujourHui, "dd/MM/yyyy")}`);
// console.log(
//   ` La date d'exemen c'est le ${format(dateExamen, "EEEE", {
//     locale: fr,
//   })} ${format(dateExamen, "dd/MM/yyyy")}`
// );
try {
    (0, math_utils_1.calculateAge)(15);
}
catch (error) {
    if (error instanceof Error) {
        console.log("Une erreure est survenue: " + error.message);
    }
    if (error instanceof number_error_1.NumberError) {
        console.log(error.message);
    }
}
