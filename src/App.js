import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import $ from "jquery";
import Popper from 'popper.js';
import Home from './Components/Home';
import Router from './Router';




function App() {
  return (
    <div className="App">
        <Router/>
        
    </div>
  );
}

export default App;
