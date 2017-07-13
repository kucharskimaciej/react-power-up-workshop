import React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from './MyComponent'

storiesOf('MyComponent', module)
    .add('text content', () => <MyComponent>Hello</MyComponent>)
    .add('icon content', () => <MyComponent>👆</MyComponent>)


/** SRC/STORIES/INDEX.JS **/
import '../MyComponent.stories';
