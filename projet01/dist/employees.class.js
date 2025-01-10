"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
class Employees {
    constructor(matricule, nom, prenoms, age, sexe) {
        this.matricule = "";
        this.nom = "";
        this.prenoms = "";
        this.age = 0;
        this.sexe = "";
        this.salaire = 0;
        this.dateEmbauche = new Date();
        this.matricule = matricule;
        this.nom = nom;
        this.prenoms = prenoms;
        this.age = age;
        this.sexe = sexe;
    }
    embaucher(dateEmbauche, salaire) {
        this.dateEmbauche = dateEmbauche;
        this.salaire = salaire;
    }
    afficherFiche() {
        console.table(this);
    }
}
exports.Employees = Employees;
