import { OperationStartegy } from "./OperationStrategy";

export class SubtractStartegy implements OperationStartegy {

    execute(a: number, b: number) {
        return a - b;
    }
}