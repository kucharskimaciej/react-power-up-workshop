import React from 'react';
import renderer from 'react-test-renderer';

import MyComponent from './MyComponent';

it('renders correctly', () => {
    const tree = renderer.create(
        <MyComponent message="Hello!">
            Click here!
        </MyComponent>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});


/** SNAPSHOT **/
exports[`renders correctly 1`] = `
<div className="my-component">
  <button onClick={[Function]}>Click here!</button>
</div>
`;


/** CHANGED TEST **/
it('renders correctly', () => {
    const tree = renderer.create(
        <MyComponent message="Hello!">
            And now here!
        </MyComponent>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

/** CONSOLE **/
jest --updateSnapshot
