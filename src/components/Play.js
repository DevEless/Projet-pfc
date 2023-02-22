import React, { Component } from 'react';
import pierre from '../images/icon-rock.svg';
import feuille from '../images/icon-paper.svg';
import ciseaux from '../images/icon-scissors.svg';
import './Play.css';


class Play extends Component {
    handleClick(e) {
        const value = e.target.textContent;
        this.props.setChoice(value);
    }

    render() {
        return (
            <div className='btn-group btn-group-block'>
                <button className='btn1' onClick={this.handleClick.bind(this)}><img src={pierre}></img></button>
                <button className='btn2' onClick={this.handleClick.bind(this)}><img src={feuille}></img></button>
                <button className='btn3' onClick={this.handleClick.bind(this)}><img src={ciseaux}></img></button>
            </div>
        );
    }

}

export default Play;
