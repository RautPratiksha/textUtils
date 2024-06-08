import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar title="textUtils" aboutText="About us"/>
      <div className='container my-3'>
      <TextForm heading="enter the text to Analyze below"/>
      </div>
      <About/>
      {/* <Navbar/> */}
      </>
  );
}

export default App;
