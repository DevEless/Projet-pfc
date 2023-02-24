import React, { Component, useEffect } from 'react';
import './App.css';
import Play from './components/Play';
import Display from './components/Display';
import Result from './components/Result';
import Modal from './components/Modal';
import regle from './images/image-rules.svg';
class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      userResult: 0,
      computerResult: 0,
      userChoice : -1,
      computerChoice: -1,
      onPause: false,
      showModal: false

    };

  }
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  
  
  compareChoice() {
    const user = this.state.userChoice;
    const computer = this.state.computerChoice;
    if ((computer === 0 && user === 2) || (computer === 1 && user === 0) || (computer === 2 && user === 1)) {
      this.setState(prevState => {
        return {
          computerResult : prevState.computerResult += 1,
          round : prevState.round += 1
        }
      }, () => this.newRound());
    } else if (computer !== user) {
      this.setState(prevState => {
        return {
          userResult : prevState.userResult += 1,
          round : prevState.round += 1
        }
      }, () => this.newRound());
    }
  }
  
  setChoice(value){
    this.setState({
      userChoice: (value === 'pierre') ? 0 : (value === 'feuille') ? 1 : 2,
      computerChoice: Math.floor(Math.random() * 3)
    }, () => this.compareChoice());
  }
  
  newRound(){
    if (this.state.userResult === 3 || this.state.computerResult === 3) {
      this.setState({
        onPause: true
      });
      setTimeout(() => {
        this.setState({
          userResult: 0,
          computerResult: 0,
          userChoice : -1,
          computerChoice: -1,
          onPause: false
        });
      }, 3000);
    }
  }
  
  render() {
    const { isOpen } = this.state;
    
    return (
      
      <div className="App">

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1 className='white'>Rock</h1>
              <h1 className='white'>Paper</h1>
              <h1 className='white'>Scissors</h1>
              </div>
            <div className='col un'>
              <div className='box'>

              <h2 className='ez'>Score</h2>
            <h2 className='ezy'>{this.state.userResult} / {this.state.computerResult}</h2>
              </div>
              </div>


          </div>
        <button className='oui' onClick={this.handleOpenModal}>Open Modal</button>
        <Modal show={this.state.showModal} handleClose={this.handleCloseModal}>
          <img className='yepp' src={regle}></img>
        </Modal>
        </div>

        {!this.state.onPause &&
          <Play setChoice={this.setChoice.bind(this)}/>
        }

        <Result userResult={this.state.userResult}
          computerResult={this.state.computerResult}
        />

        <Display userResult={this.state.userResult}
          computerResult={this.state.computerResult}
          userChoice={this.state.userChoice}
          computerChoice={this.state.computerChoice}
        />


      </div>   
    );
  }
}








export default App;
