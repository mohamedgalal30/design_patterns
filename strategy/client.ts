import { Calculator } from "./CalculatorContext";
import { AddStartegy } from "./AddStrategy";
import { MultiplyStartegy } from "./MultiplyStrategy";
import { SubtractStartegy } from "./SubtractStrategy";

const calc = new Calculator(new AddStartegy());

console.log("Add:" + calc.perform(6, 2));

calc.setStrategy(new SubtractStartegy());
console.log("Subtract:" + calc.perform(6, 2));

calc.setStrategy(new MultiplyStartegy());
console.log("Multipy:" + calc.perform(6, 2));