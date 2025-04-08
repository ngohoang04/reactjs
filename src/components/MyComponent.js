import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'John Doe',
        age: 30,
        address: 'New York'
    };
    handerClick = () => {
        this.setState({ name: 'Jane4343 Doe' });
    };
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                {this.state.name}
                <button onClick={this.handerClick} >click me</button>
            </div>
        );
    }
}

export default MyComponent;