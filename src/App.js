import React from 'react'
import './App.css';
import DisplaySimp from './components/DisplaySimp';
import axios from 'axios';

function App() {
  const [simpsonQuote, setSimpsonQuote] = React.useState("");

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        setSimpsonQuote(data[0]);
      });
  };

  

  return (
    <div className="App">
      <button onClick={getQuote}>
        Next
      </button>
      <DisplaySimp {...simpsonQuote} />
    </div>
  );
}

export default App;
