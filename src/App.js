import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>
  {
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
    
  }
  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
      <TextForm heading="enter the text to Analyze below" mode={mode}/>
      </div>
      <About/>
      </>
  );
}

export default App;
