import Snowfall from 'react-snowfall';
import Gameboard from './components/gameboard/Gameboard';
import logoImg from './assets/logo.png';
import './App.css';
import {Wallet} from './components/nav/Wallet';
function App() {
  return (
    <div>
      <Wallet/>
      <div className="App">
          <Snowfall 
              style={{
                // background: '#01a2ef',
                position: 'fixed',
                width: '100vw',
                height: '100vh'
              }}
          />
          <div className="title">
              <img src={logoImg} alt="BCL Logo" />
              <h1>BCL Coin Flip</h1>
          </div>
            <Gameboard />
      </div>
    </div>
    
  );
}

export default App;
