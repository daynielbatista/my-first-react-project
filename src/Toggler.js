import React from 'react';

class Toggler extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'Denet',
            from: 'Cuba',
            level: 'Expert',
            available: true
        }        
    }

    handleClick = () => {
        this.setState({available: !this.state.available});
    }

    render() {
        return (
          <div>
            <h1>Teacher</h1>
            <p>Name: {this.state.name}</p>
            <p>Available: {this.state.available ? 'Yes' : 'No'}</p>
            <button onClick={this.handleClick}>Availability</button>
          </div>
        );
      }       
}

export default Toggler;

