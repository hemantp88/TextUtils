import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {

        let upper = text.toUpperCase();
        setText(upper);
        props.showAlert("Converted to UpperCase ","success");


    }
    const handleLoClick = () => {
        let upper = text.toLowerCase();
        setText(upper);
        props.showAlert("Converted to LowerCase ","success");
    }
    const handleClearClick = () => {
        let clear = "";
        setText(clear);
        props.showAlert("Text Clear ","danger");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const handleReverseClick = () => {
        const reverse = text.split('').reverse().join('');
        setText(reverse);props.showAlert("Converted to UpperCase ","success");
    }
    const handleRevWordClick = () => {
        let reverseWordArr = text.split(" ").map(word => word.split("").reverse().join(""));
        setText(reverseWordArr.join(" "));
        props.showAlert("Reverse Word","success");
    }

    const count = ()=>{
        if (text.length>0){
        return text.trim().split(/[ ]+/).length;
        }
        else{
        return 0;
        }
        }
        


    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style  ={{color:props.mode==='light' ?'#242428':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style  ={{backgroundColor:props.mode==='light' ?'white':'#242428' , color:props.mode==='light' ?'#242428':'white'}}   onChange={handleOnChange} id="MyBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To UpperCase </button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To lowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Whole Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleRevWordClick}>Reverse words </button>

            </div>
            <div className="conatiner my-3" style  ={{color:props.mode==='light' ?'#242428':'white'}}>
            
                <h1>Your text summary</h1>
                <p>
                    {/* {(text.length=== 0  | text[text.length-1]===" ")? text.split(" ").length-1:text.split(" ").length} words from {text.length} character */}
                    {/* {text.split(" ").length-1} words from {text.length} character */}
                    {count()} words from {text.length} character
                </p>
                <p> {text.split(" ").length * .008} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter the text above to preview it" }</p>
            </div>
        </>

    )
}
