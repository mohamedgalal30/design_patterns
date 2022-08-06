import { OperationStartegy } from "./OperationStrategy";

export class MultiplyStartegy implements OperationStartegy {

    execute(a: number, b: number) {
        return a * b;
    }
}