import React, { useState } from "react";

export default function TextArea(props) {
  const [text, UpdateText] = useState("Enter Your Text Here...");

  const OnClickFunction1 = () => {
    console.log("UpperCase Button Clicked !..." + text);
    let newText = text.toUpperCase();
    UpdateText(newText);
    props.showAlertFun("Converted To UpperCase....","success !");
  };

  const OnClickFunction2 = () => {
    console.log("LowerCase Button Clicked !..." + text);
    let newText = text.toLowerCase();
    UpdateText(newText);
    props.showAlertFun("Converted To LowerCase....","success !");
  };

  const OnChangeFunction = (event) => {
    console.log("Value Upadated");
    UpdateText(event.target.value);
  };

  const handleExtraSpace = ()=>{
    let newText= text.split(/[ ]+/);
    UpdateText(newText.join(" "));
  }
  
  const clearFunc=()=>{
    let newText = " ";
    UpdateText(newText);
    props.showAlertFun("Your Textbox Data Is Cleared....","success !");
  }
  const handleCopy =()=>{
    var newText = document.getElementById("Textbox");
    navigator.clipboard.writeText(newText.value);
    props.showAlertFun("Your Textbox Data Is Copied....","success !");
  }
  return (
    <div className="con" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>{props.Heading}</h2>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          value={text}
          onChange={OnChangeFunction}
          id="Textbox"
          rows="8"
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <div className="container mp-2">
        <button className="btn btn-primary mx-3" onClick={OnClickFunction1}>
          Uppercase
        </button>

        <button className="btn btn-primary mx-3" onClick={OnClickFunction2}>
          Lowercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy
        </button>

        <button className="btn btn-primary mx-3" onClick={clearFunc}>
          Clear
        </button>

        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>
          Handle Extra Space
        </button>
      </div>

      <div className="con my-5">
        <h3>Your Text Summary : </h3>
        <p>Number Of Letters : {text.length}</p>
        <p>Number Of Words : {text.split(" ").length}</p>
      </div>

      <div className="con my-5">
        <h3>Your Text Preview : </h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
