import React from 'react';
import { shallow } from 'enzyme';

import MyComponent from './MyComponent';

describe('<MyComponent/>', () => {
    it('renders the button', () => {
        const wrapper = shallow(<MyComponent>Hello</MyComponent>);
        expect(wrapper.contains(<button>Hello</button>)).toBe(true);
    });
})
