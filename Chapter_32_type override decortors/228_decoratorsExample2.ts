function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Result of ${propertyKey}:`, result);
        return result;
    };
    return descriptor;
}

    class greeter {
        @logged
        greet(name: string): string {
            return `Hello, ${name}!`;
        }
    }
    const greeterInstance = new greeter();
    console.log("greet result", greeterInstance.greet("swapna"));