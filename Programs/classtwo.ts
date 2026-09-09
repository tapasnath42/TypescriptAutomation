class classtwo{

    constructor(num1: number|string){
        console.log(`This is ${num1}`);

    }

    override async add(params: number): Promise<void> {
        console.log(`ClassOne add method called with ${params}`);
    }
}

const classTwoObject1 = new classtwo("Tapas");
const classTwoObject2 = new classtwo(2);