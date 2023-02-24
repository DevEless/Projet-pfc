import React, { Component } from 'react';
import './Result.css'
class Result extends Component {

  render() {
    let result = null;
    if (this.props.userResult === 3) {
      result = <div className='result'>YOU WON !</div>
    }
    if (this.props.computerResult === 3) {
      result = <div className='result'>You lost...</div>
    }
    

    if (this.props.userResult === 3 || this.props.computerResult === 3) {
      document.querySelector('.box').classList.add('vanish');
      document.getElementById('zot').classList.add('vanish');
      document.getElementById('zot2').classList.add('vanish');
      document.querySelector('.oui').classList.add('vanish');
      document.querySelector('.container').classList.add('vanish');


    }
    function reload() {
      window.location.reload();
    }

    return (
      <div className='final'>

        {result}
        <button className='nice' onClick={reload}>Play again ?</button>
      </div>
    );
  }


}

export default Result;
