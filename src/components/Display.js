import React, { Component } from 'react';
import pierre from '../images/icon-rock.svg';
import feuille from '../images/icon-paper.svg';
import ciseaux from '../images/icon-scissors.svg';
import './Display.css'


class Display extends Component {

    render() {
        let userChoice = this.props.userChoice;
        let computerChoice = this.props.computerChoice;

        const userImage = <img className='ag' src={userChoice === 0 ? pierre : userChoice === 1 ? feuille : userChoice === 2 ? ciseaux : undefined} alt='' />;

        const computerImage = <img className='ag' src={computerChoice === 0 ? pierre : computerChoice === 1 ? feuille : computerChoice === 2 ? ciseaux : undefined} alt='' />;
        
        const div1 = document.getElementById('zot')
        const div2 = document.getElementById('zot2')
        


        function turnToZero() {

            div1.classList.add('vanish')
            div2.classList.add('vanish')

        }

        setTimeout(turnToZero, 3000);

    
        return (
            <div className='columns'>
                <div className='column col-2 col-mx-auto text-center'>

                    <div id='zot'>
                    {userChoice !== -1 && userImage}
                    
                        </div>
                </div>

                <div className='column col-2 col-mx-auto text-center'>

                    <div id='zot2'>
                    {computerChoice !== -1 && computerImage}
                        </div>
                </div>
            </div>
        );
    }

}

export default Display;

