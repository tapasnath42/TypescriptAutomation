class ClassOne extends classtwo{

    constructor(num1: string | number, num2: string | number) {
        super(2);
        if (typeof num1 === "number" && typeof num2 === "number") {
            console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
        } else {
            console.log(`The values are ${num1} and ${num2}`);
        }
    }

    override async add(params: number): Promise<void> {
        console.log(`ClassOne add method called with ${params}`);
    }
}

const obj = new ClassOne(2, 2);
const obj1 = new ClassOne("Tapas", "Nath");