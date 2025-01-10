"use strict";
let age = 12.5;
let nom = "Coco";
let dateNaiss = new Date();
let estMarie = false;
let quel;
let regions = ["Koulicoro", "Segou", "Mopti", "Sikasso"];
regions.push("Kayes");
let personne = [
    "DIARRA",
    "Mousa",
    true,
    new Date(),
];
let employe = {
    matricule: "0001",
    nom: "COULIBALY",
    prenoms: "Adama",
};
//let emp: Employees = { matricule: "0001", nom: "COULIBALY", prenoms: "Adama" };
var SEXE;
(function (SEXE) {
    SEXE[SEXE["MASCULIN"] = 0] = "MASCULIN";
    SEXE[SEXE["FEMININ"] = 1] = "FEMININ";
})(SEXE || (SEXE = {}));
if (age < 20) {
    console.log("Vous etes jeune");
}
else {
    console.log("Vous etes adulte");
}
// function greet(name: string) {
//   return `Bonjour ${name} !`;
// }
// console.log(greet("Aminata"));
