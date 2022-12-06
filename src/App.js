import logo from './logo.svg';
import './App.css';
import Background from './background.png'


function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        background: `url(${Background}) `,
      }}>
        <img src={logo} className="App-logo" alt="logo" style={{
          backgroundColor: 'white',
        }} />
        <p className="Text" style={{
          backgroundColor: 'white',
        }}>
          Web3, to be continued....
        </p>
      </header>
    </div>
  );
}

export default App;
