class ComponentA extends React.Component {
    handleUserAction(e) {
        // ...
    }

    render() {
        return (
            <button onClick={this.handleUserAction.bind(this)}>
                Click
            </button>
        );
    }
}

class ComponentB extends React.Component {
    handleUserAction() {
        // ...
    }

    render() {
        return (
            <button onClick={(e) => this.handleUserAction(e)}>
                Click
            </button>
        );
    }
}
