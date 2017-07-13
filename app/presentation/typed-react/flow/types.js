/* @flow */

const bar: number = 2;

function foo(x: ?string): string {
    if (x) {
        return x;
    }
    return "default string";
}

const arrayOfNumbers: number[] = [1, 2, 3];

interface Circle {
    position: ?{
        x: number,
        y: number
    }
    radius: number;

    area(): number;
}

const circle: Circle = {
    radius: 2,
    area() {
        return Math.PI * this.radius * this.radius;
    }
};

class Foo {
    bar() {}
}

const fooInstance: Foo = new Foo();