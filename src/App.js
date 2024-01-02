import {
  HashRouter as Router,
} from "react-router-dom";

import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Page from './Components/Page';
// import { BrowserRouter as Router } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Page/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
