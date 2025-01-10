"use strict";
let emps = [];
emps.push({
    matricule: "0001",
    nom: "TRAORE",
    prenoms: "Mama",
    age: 25,
    sexe: "F",
});
emps.push({
    matricule: "0002",
    nom: "DIARRA",
    prenoms: "Moustapha",
    age: 55,
    sexe: "M",
});
emps.push({
    matricule: "0003",
    nom: "SISSOKO",
    prenoms: "Mohamed",
    age: 35,
    sexe: "M",
});
emps.push({
    matricule: "0004",
    nom: "KONE",
    prenoms: "Ammina",
    age: 45,
    sexe: "F",
});
emps.push({
    matricule: "0005",
    nom: "SANGARE",
    prenoms: "Mark",
    age: 55,
    sexe: "F",
});
let filles = emps.filter((e) => e.sexe === "F");
let vieux = emps.filter((e) => e.age >= 40);
const kone = emps.find((e) => e.nom === "KONE");
let sum = emps.reduce((i, c) => i + c.age, 0);
console.table(emps);
console.log(sum);
