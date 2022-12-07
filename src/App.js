import logo from './logo.svg';
import './App.css';
import SocialFollow from "./SocialFollow"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Doma🏠Nodes</h1>
        <img src={logo} className="App-logo" alt="logo" style={{
          backgroundColor: 'white'
        }} />
        <p className="Text">     
          Web3, to be continued....
        </p>
      </header>
      <SocialFollow />
    </div>
  );
}

export default App;
