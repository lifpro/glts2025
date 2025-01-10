import { Employees } from "./employees.class";

let e1: Employees = new Employees("001", "FAROTA", "Ibrahima", 26, "M");
e1.embaucher(new Date("2025-01-01"), 2000000);
e1.afficherFiche();
