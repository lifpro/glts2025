export class Employees {
  matricule: string = "";
  nom: string = "";
  prenoms: string = "";
  age: number = 0;
  sexe: string = "";
  salaire: number = 0;
  dateEmbauche: Date = new Date();
  constructor(
    matricule: string,
    nom: string,
    prenoms: string,
    age: number,
    sexe: string
  ) {
    this.matricule = matricule;
    this.nom = nom;
    this.prenoms = prenoms;
    this.age = age;
    this.sexe = sexe;
  }

  embaucher(dateEmbauche: Date, salaire: number): void {
    this.dateEmbauche = dateEmbauche;
    this.salaire = salaire;
  }
  afficherFiche(): void {
    console.log(this);
    console.table(this);
  }
}
