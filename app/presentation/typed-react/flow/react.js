// @flow

export interface ITypedComponentState {
    +currentItemId: ?number,
    +tempItems: Item[],
}

export interface ITypedComponentProps {
    +items: Item[]
}

class TypedComponent extends React.Component {
    state: ITypedComponentState = {
        tempItems: []
    };

    props: ITypedComponentProps;

    static defaultProps = {
        items: []
    };

    /* ... */
}
