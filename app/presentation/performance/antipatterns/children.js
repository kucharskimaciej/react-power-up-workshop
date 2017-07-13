class BadComponent extends React.Component {
    /* ... */

    render() {
        return (
            <FastComponent /*props*/>
                <ChildComponent />
            </FastComponent>
        );
    }
}


class GoodComponent extends React.Component {
    childComponent = <ChildComponent />;

    render() {
        return (
            <FastComponent /*props*/>
                {this.childComponent}
            </FastComponent>
        );
    }
}

