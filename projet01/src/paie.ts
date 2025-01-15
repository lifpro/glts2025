// let e1: Employees = new Employees("001", "FAROTA", "Ibrahima", 26, "M");
// e1.embaucher(new Date(2025, 1, 1), 2000000);
// e1.afficherFiche();
// console.log(math.pi);
// console.log(math.addition(4, 5));
// console.log(math.multiplication(4, 5));
// console.log(c(4, 5));

import { NumberError } from "./errors/number.error";
import { calculateAge } from "./utils/math.utils";

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
  calculateAge(15);
} catch (error: unknown) {
  if (error instanceof Error) {
  }
  if (error instanceof NumberError) {
    console.log(error.message);
  }
}
