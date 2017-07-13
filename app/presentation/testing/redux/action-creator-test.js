/** ACTION CREATOR **/
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            text,
            completed: false
        }
    };
}


/** TEST **/
describe('addTodo', () => {
    it('returns action with correct type', () => {
        const action = addTodo('Learn React');
        expect(action.type).toBe('ADD_TODO');
    });

    it('returns action with the todo in payload', () => {
        const action = addTodo('Learn React');
        expect(action.payload.text).toBe('Learn React');
    });
});
