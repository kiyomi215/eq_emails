import React from 'react';

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: "Click me and see what happens"
    };
  }

  addExclamation () {
    this.setState({
      buttonText: this.state.buttonText + "!"
    });
  }

  render() {
    return (
      <button onClick={()=> {
        this.addExclamation();
      }}>
      {this.state.buttonText}
      </button>
    )
  }
}

export default React.createElement(Example);
