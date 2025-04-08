import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'John Doe',
        age: 30,
        address: 'New York'
    };
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                {this.state.name}
            </div>
        );
    }
}

export default MyComponent;