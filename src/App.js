import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>
  {
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor='#042743';
      //document.title='textUtils-darkMode'//title change
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      //document.title='textUtils-lightMode'//title change
    }
    
  }
  return (
    <>
    <Router>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
      <Routes>
        <Route path="/about" element={<About/>}>
        </Route>
        <Route path="/" element={<TextForm heading="enter the text to Analyze below" mode={mode}/>}>
        
        </Route>
      </Routes>
      </div>
      </Router>
      
    
      </>
  );
}

export default App;
