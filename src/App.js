import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Header/>
          <center>
          <h1>Sorting Visulaizer In React</h1>
            </center>
          <Home />
      </div>
    </div>
  );
}

export default App;
