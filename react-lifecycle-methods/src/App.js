import React from 'react';

import MyComponent from './MyComponent';
import getRandomInt from './util/getRandomInt';

class App extends React.Component {
    state = {
        mountMyComponent: true,
        someProp: getRandomInt(1000),
        ignoreProp: getRandomInt(1000),
    };
    toggleMountMyComponent = () => {
        this.setState(({ mountMyComponent }) => ({
            mountMyComponent: !mountMyComponent,
        }));
    };
    updateSomeProp = () => this.setState({ someProp: getRandomInt(1000) });
    updateIgnoreProp = () => this.setState({ ignoreProp: getRandomInt(1000) });
    toggleFoo = () => this.setState({ foo: !this.state.foo });
    render() {
        const { mountMyComponent, someProp, ignoreProp } = this.state;
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Parent component</h1>
                    <button
                        className='btn btn-primary'
                        onClick={this.toggleMountMyComponent}
                    >
                        { mountMyComponent ? 'Unmount MyComponent' :  'Mount MyComponent' }
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={this.updateSomeProp}
                    >
                        Update some prop
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={this.updateIgnoreProp}
                    >
                        Update ignore prop
                    </button>
                    {mountMyComponent &&
                        <MyComponent someProp={someProp} ignoreProp={ignoreProp} />
                    }
                </div>
            </div>
        );
    }
}
export default App;
