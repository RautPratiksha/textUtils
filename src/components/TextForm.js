import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState("");
    const handleUpClick=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleDownClick=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        setText('');
    }
    const handleCopyClick=()=>
    {
       var text=document.getElementById('myBox') 
       text.select();
       navigator.clipboard.writeText(text.value);
    }
    const handleSpacesClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }


  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id='myBox' rows='8'></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
      <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to LowerCase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
      <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
      <button className='btn btn-primary mx-2' onClick={handleSpacesClick}>Clear Extra Spaces</button>

    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text above to preview it here"}</p>
    </div>
    </>
  )
}
