class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserAction = this.handleUserAction.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleUserAction}>
                Click
            </button>
        );
    }
}

class ComponentB extends React.Component {
    handleUserAction = () => {
        // ...
    }

    render() {
        return (
            <button onClick={this.handleUserAction}>
                Click
            </button>
        );
    }
}