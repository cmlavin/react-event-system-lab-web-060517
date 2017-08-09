import React from 'react';

class Keypad extends React.Component {
  handleKeyPress = () => {
    console.log('Entering password...')
  }
  render() {
    return (
      <input onKeyUp={this.handleKeyPress} type="password" />
    );
  }
}

export default Keypad;
