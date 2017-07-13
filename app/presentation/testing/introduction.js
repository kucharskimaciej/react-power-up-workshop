class Service {
    foo = 6;

    bar(value) {
        return Boolean(value);
    }
}

describe('Service', () => {
    let instance;

    beforeEach(() => {
        instance = new Service();
    });

    it('has `foo` property', () => {
        expect(instance.foo).toBe(6);
    });

    describe('#bar', () => {
        it('returns true if passed truthy value', () => {
            expect(instance.bar(true)).toBe(true);
        });
    });
});
