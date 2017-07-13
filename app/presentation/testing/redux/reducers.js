import todos from 'reducers/todos';

describe('todos reducer', () => {
    it('handles ADD_TODO', () => {
        const state = todos([], addTodo('Test AddTodo'));
        const expected = [
            {
                text: 'Test AddTodo',
                completed: false
            }
        ];

        expect(state).toEqual(expected);
    });
});
