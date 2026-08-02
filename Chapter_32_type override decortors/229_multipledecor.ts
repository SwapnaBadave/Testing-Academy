function first(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log("first decorator");
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

function second(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log("second decorator");
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

class dog {
    @first
    @second
    bark() {
        return "woff";
    }
}
new dog().bark();