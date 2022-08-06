import { OperationStartegy } from "./OperationStrategy";

export class Calculator {
    strategy: OperationStartegy;

    constructor(aStrategy: OperationStartegy) {
        this.strategy = aStrategy;
    }

    setStrategy(aStrategy: OperationStartegy) {
        this.strategy = aStrategy;
    }

    perform(a: number, b: number) {
        return this.strategy.execute(a, b);
    }
}