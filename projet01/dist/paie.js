"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employees_class_1 = require("./employees.class");
let e1 = new employees_class_1.Employees("001", "FAROTA", "Ibrahima", 26, "M");
e1.embaucher(new Date("2025-01-01"), 2000000);
e1.afficherFiche();
