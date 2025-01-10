interface Employees {
  matricule: string;
  nom: string;
  prenoms: string;
  age: number;
  sexe: string;
}
let emps: Employees[] = [];
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

const filles: Employees[] = emps.filter((e) => e.sexe === "F");
var vieux: Employees[] = emps.filter((e) => e.age >= 40);
//const kone: any = emps.find((e) => e.nom === "KONE");
let sum: number = emps.reduce((i, c) => i + c.age, 0);
console.table(emps);
console.log(sum);
