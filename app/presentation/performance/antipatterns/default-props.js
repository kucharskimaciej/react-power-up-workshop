class BadComponent extends React.Component {
    render() {
        const options = this.props.options || {};

        return (
            <AnotherComponent options={options} />
        );
    }
}

class GoodComponent extends React.Component {
    defaultOptions = {};

    render() {
        const options = this.props.options || this.defaultOptions;

        return (
            <AnotherComponent options={options} />
        );
    }
}

class AlsoGoodComponent extends React.Component {
    static defaultProps = {
        options: {}
    };

    render() {
        const options = this.props.options;

        return (
            <AnotherComponent options={options} />
        );
    }
}

