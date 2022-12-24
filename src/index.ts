import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";

console.log("from index file");

const elton = new Dog("Elton", "Bouvier", 7);
elton.bark();

console.log(add(5, 3));
console.log(multiply(4, 3));
console.log(divide(25, 5));

const buffy = new ShelterDog("Buster", "Golden", 4, "Florida");
