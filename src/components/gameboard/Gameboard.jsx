import { useState } from 'react'
import headsImg from '../../assets/head.png'
import tailsImg from '../../assets/tail.png'
import './Gameboard.css'
import toast, { Toaster } from 'react-hot-toast'

const Gameboard = (props) => {
    const betbuttons = [
        {
            amount: 0.1
        },
        {
            amount: 0.25
        },
        {
            amount: 0.5
        },
        {
            amount: 1
        },
    ];

    const faces = ['heads', 'tails'];
    const [flipping, setFllipping] = useState(false);
    const flippingClass = flipping ? 'coin-img-animation' : 'coin-img'
    const [face, setFace] = useState('heads');
    const [result, setResult] = useState('heads');
    const setHeads = async() => {
        setFace('heads');
    }

    const setTails = async() => {
        setFace('tails');
    }

    const flipCoin = async() => {
        let rand = Math.floor(Math.random() * 2);
        setFllipping(true);
        
        setTimeout(() => {
            setFllipping(false);
            setResult(faces[rand]);
            if(faces[rand] == face) {
                toast.success("You won.");
            } else {
                toast.error("You lost.");
            }
        }, 3000);
        
    }

    return (
        <div className='game-board row'>
            <div className={'col-lg-4 col-md-12 col-sm-12 m-auto ' + face}>
                <div>
                    <img className="row head-button" src={headsImg} alt="Head Image" onClick={setHeads}/>
                    <h4 className='text-center mt-1 mb-5'>Heads</h4>
                </div>
                <div>
                    <img className="tail-button row" src={tailsImg} alt="Tail Image" onClick={setTails}/>
                    <h4 className='text-center mt-1'>Tails</h4>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 m-auto">
                <div className={flippingClass}>
                    {result == 'heads' ? 
                        <img className="head-img" src={headsImg} alt="Face Image" /> 
                    :
                        <img className="tail-img" src={tailsImg} alt="Face Image" /> 
                    }
                    {/* <img className="tail-img" src={tailImg} alt="Tail Image" />
                    <img className="head-img" src={headImg} alt="Head Image" /> */}
                </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 m-auto'>
                <div className='flip-button' onClick={flipCoin}>
                    FLIP
                </div>
                {betbuttons.map(({amount}, index) => (
                    <div className='bet-button' key={index}>
                       {amount}
                    </div>
                ))}
            </div>
            <Toaster position='top-center' reverseOrder={false} />
        </div>
      )
  }
  
  export default Gameboard;