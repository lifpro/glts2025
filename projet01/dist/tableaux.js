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
// const filles: Employees[] = emps.filter((e) => e.sexe === "F");
// var vieux: Employees[] = emps.filter((e) => e.age >= 40);
// const kone: any = emps.find((e) => e.nom === "KONE");
//let sum: number = emps.reduce((i, c) => i + c.age, 0);
// let total = 0;
// emps.forEach((e) => {
//   total = total + e.age;
// });
// console.table(emps);
// console.log(sum);
// Les map
let values = [1, 2, 3];
let squares = [];
values.forEach((e) => {
    squares.push(e * e);
});
let squaresmap = values.map((n) => n * n);
console.log(squaresmap);
