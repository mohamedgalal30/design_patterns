import { OperationStartegy } from "./OperationStrategy";

export class AddStartegy implements OperationStartegy {

    execute(a: number, b: number) {
        return a + b;
    }
}