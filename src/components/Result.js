import React, { Component } from 'react';

class Result extends Component {

  render() {
    let result = null;
    if (this.props.userResult === 3) {
      result = <div className='result'>YOU WON !</div>
    }
    if (this.props.computerResult === 3) {
      result = <div className='result'>You lost...</div>
    }

    return (
      <div>
        {result}
      </div>
    );
  }


}

export default Result;
