import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;