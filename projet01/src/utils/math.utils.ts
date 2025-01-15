import { NumberError } from "../errors/number.error";

export const pi = 3.14;
export function addition(a: number, b: number): number {
  return a + b;
}
export function multiplication(a: number, b: number): number {
  return a * b;
}

export function calculateAge(age: number): void {
  if (age < 18) {
    throw new NumberError("L'age n'est pas valides", 455);
  }
  console.log("Age valide");
}
