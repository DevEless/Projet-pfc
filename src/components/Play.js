import React, { Component } from 'react';
import pierre from '../images/icon-rock.svg';
import feuille from '../images/icon-paper.svg';
import ciseaux from '../images/icon-scissors.svg';
import './Play.css';


class Play extends Component {
    handleClick(e) {

        let value = e.target.value;
        if (e.target.classList.contains('btn1')) {
            value = 'pierre';
        }
        if (e.target.classList.contains('btn2')) {
            value = 'feuille';
        }
        if (e.target.classList.contains('btn3')) {
            value = 'ciseaux';
        }
        
        this.props.setChoice(value); 

        const div1 = document.getElementById('zot');
        const div2 = document.getElementById('zot2');


        const btn1 = document.querySelector('.btn1');
        const btn2 = document.querySelector('.btn2');
        const btn3 = document.querySelector('.btn3');

        btn1.classList.add('vanish');
        btn2.classList.add('vanish');
        btn3.classList.add('vanish');

        div1.classList.remove('vanish');
        div2.classList.remove('vanish');

        div1.classList.add('fun1');
        div2.classList.add('fun2');

        setTimeout(() => {
            btn1.classList.remove('vanish');
            btn2.classList.remove('vanish');
            btn3.classList.remove('vanish');
            div1.classList.remove('fun1');
            div2.classList.remove('fun2');
        }, 3000);


        
    }

    render() {
        return (
            <div id='chiant'>
                <button className='btn1' onClick={this.handleClick.bind(this)}><img src={pierre}></img></button>
                <button className='btn2' onClick={this.handleClick.bind(this)}><img src={feuille}></img></button>
                <button className='btn3' onClick={this.handleClick.bind(this)}><img src={ciseaux}></img></button>
            </div>
        );
    }

}

export default Play;
