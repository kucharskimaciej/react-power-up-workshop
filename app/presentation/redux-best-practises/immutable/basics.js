import {Map, List, fromJS} from 'immutable';

const mutableCollection = [1, 2, 3];
mutableCollection.push(4);
// mutableCollection => [1, 2, 3, 4]

const immutableCollection = List([1, 2, 3]);
immutableCollection.push(4);
// immutableCollection => [1, 2, 3]

const mutableObject = { foo: 1, bar: 2 };
console.log(mutableObject.foo); // 1
mutableObject.bar = 'baz';
// mutableObject => { foo: 1, bar: 'baz' }

const immutableObject = Map({ foo: 1, bar: 2});
immutableObject.get('foo'); // 1
immutableObject.set('bar', 'baz');
// immutableObject => { foo: 1, bar: 2 }

const immutableStructure = fromJS({ /* properties */ });
const mutableAgain = immutableStructure.toJS();
