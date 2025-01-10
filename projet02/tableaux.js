var emps = [];
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
var filles = emps.filter(function (e) {
  return e.sexe === "F";
});
var vieux = emps.filter(function (e) {
  return e.age >= 40;
});
//const kone: any = emps.find((e) => e.nom === "KONE");
var sum = emps.reduce(function (i, c) {
  return i + c.age;
}, 0);
console.table(emps);
console.log(sum);
filles = 10;
