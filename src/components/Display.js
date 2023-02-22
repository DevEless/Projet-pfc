import React, { Component } from 'react';
import pierre from '../images/icon-rock.svg';
import feuille from '../images/icon-paper.svg';
import ciseaux from '../images/icon-scissors.svg';


class Display extends Component {

    render() {
        const userChoice = this.props.userChoice;
        const computerChoice = this.props.computerChoice;

        const userImage = <img className='img-responsive' src={userChoice === 0 ? pierre : userChoice === 1 ? feuille : userChoice === 2 ? ciseaux : undefined} alt='Objet joué' />;

        const computerImage = <img className='img-responsive computer' src={computerChoice === 0 ? pierre : computerChoice === 1 ? feuille : computerChoice === 2 ? ciseaux : undefined} alt='Objet joué' />;

        return (
            <div className='columns'>
                <div className='column col-2 col-mx-auto text-center'>
                    <h1 id='user'>YOU</h1>
                    <h2>{this.props.userResult}</h2>
                    {userChoice !== -1 &&
                        userImage
                    }
                </div>

                <div className='column col-2 col-mx-auto text-center'>
                    <h1 id='computer' className='computer'>COMPUTER</h1>
                    <h2 className='computer'>{this.props.computerResult}</h2>
                    {computerChoice !== -1 &&
                        computerImage
                    }
                </div>
            </div>
        );
    }

}

export default Display;
