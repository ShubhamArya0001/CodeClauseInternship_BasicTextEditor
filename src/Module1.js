import React, { useState } from "react";

export default function Module1(props) {
  const [text, setText] = useState("Enter here.......");
  const upperCas = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase", "success");

  }
  const lowrCa = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("lowercase", "success");
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  const handleOnClear = () => {
    let newtext = '';
    setText(newtext);
    props.showAlert("Clear text", "success");

  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied", "success");
  }
  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 style={{color : 'red', textShadow :'2px 2px yellow' }}>Enter your text here</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }} rows="8">Enter here</textarea>
        </div>
        <button className="btn btn-info mx-1 my-1" onClick={upperCas}>UpperCase</button>
        <button className= " btn btn-info mx-1 my-1" onClick={lowrCa}>LowerCase</button>
        <button className= "btn btn-info mx-1 my-1" onClick={handleOnClear}>Clear</button>
        <button className ="btn btn-info mx-1 my-1" onClick={handleCopy}>Copy</button>
      </div>
      <div className="container my-3">
        <h1 style={{color : 'red', textShadow :'2px 2px yellow' }}>Text Summary</h1>
        <p style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>Text = {text.split(" ").filter((ele)=>{return ele.length!=0}).length} words and {text.length} characters</p>
        <p style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{0.008 * text.split(" ").length} Minute read</p>
        <h1 style={{color : 'red', textShadow :'2px 2px yellow' }}>Preview</h1>
        <p style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{text}</p>

      </div>

    </>
  )
}
