import React from 'react';

import getRandomInt from './util/getRandomInt';

class MyComponent extends React.Component {
    // Lifecycle methods
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            ignore: getRandomInt(1000),
        };
        console.log('constructor');
    };
    componentDidMount() {
        console.log('componentDidMount');
        console.log('=================================================');
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.ignore !== this.state.ignore) {
            console.log('shouldComponentUpdate: NO, "ignore"');
            console.log('=================================================');
            return false;
        };
        if(nextProps.ignoreProp !== this.props.ignoreProp) {
            console.log('shouldComponentUpdate: NO, "ignoreProp"');
            console.log('=================================================');
            return false;
        }
        console.log('shouldComponentUpdate: YES');
        return true;
    };
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('=================================================');
    };
    componentWillUnmount() {
        console.log('componentWillUnmount');
        console.log('=================================================');
    };
    // update internal state as the result of changes in props without additional render
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
        
    }
    render() {
        const { counter, ignore } = this.state;
        const { someProp, ignoreProp } = this.props;
        console.count('render');
        return (
            <div className="bg-light">
                <h2>Hello from MyComponent</h2>
                <p>Counter: { counter }</p>
                <p>Ignore: { ignore }</p>
                <hr />
                <p>someProp: { someProp }</p>
                <p>ignoreProp: { ignoreProp }</p>
                <button
                    className="btn btn-primary"
                    onClick={this.updateLocalState}
                >
                    Update local state counter
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.updateLocalStateIgnore}
                >
                    Update local state ignore
                </button>
            </div>
        );
    };
    // Other methods
    updateLocalState = () => {
        this.setState(({ counter }) => ({
            counter: ++counter,
        }));
    };
    updateLocalStateIgnore = () => this.setState({ ignore: getRandomInt(1000) });    
};
export default MyComponent;