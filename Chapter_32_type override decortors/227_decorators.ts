function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Result of ${propertyKey}:`, result);
        return result;

    };

}
class calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
    @log
    subtract(a: number, b: number): number {
        return a - b;
    }
    
}
const calc = new calculator ();
console.log("add result", calc.add(5, 3));
console.log("subtract result", calc.subtract(10, 4));


