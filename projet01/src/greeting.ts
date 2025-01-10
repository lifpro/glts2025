let age: number = 12.5;
let nom: string = "Coco";
let dateNaiss: Date = new Date();
let estMarie: boolean = false;
let quel: any;
let regions: string[] = ["Koulicoro", "Segou", "Mopti", "Sikasso"];
regions.push("Kayes");
let personne: [string, string, boolean, Date] = [
  "DIARRA",
  "Mousa",
  true,
  new Date(),
];
let employe: { matricule: string; nom: string; prenoms: string } = {
  matricule: "0001",
  nom: "COULIBALY",
  prenoms: "Adama",
};

interface Employees {
  matricule: string;
  nom: string;
  prenoms: string;
}

//let emp: Employees = { matricule: "0001", nom: "COULIBALY", prenoms: "Adama" };

enum SEXE {
  MASCULIN,
  FEMININ,
}
if (age < 20) {
  console.log("Vous etes jeune");
} else {
  console.log("Vous etes adulte");
}

// function greet(name: string) {
//   return `Bonjour ${name} !`;
// }
// console.log(greet("Aminata"));
