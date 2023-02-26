import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Text Converted to Upper Case", "success")
    };

    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Text Converted to Lower Case", "success")
    }

    const handleClearText = () => {
        setText("")
        props.showAlert("Text Box has been Cleared", "success")
    }

    const handleCopy = () => {
        var txt = document.getElementById("exampleFormControlTextarea1")
        txt.select();
        navigator.clipboard.writeText(txt.value)
        props.showAlert("Text Copied to Clipboard", "success")
        
    }
    
    const handleCapitalizedCase = () => {
        const capcase = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(capcase);
        props.showAlert("Text Converted to Capitalized Case", "success");
    }

    const handleAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
        props.showAlert("Text Converted to Alternating Case", "success")
    }

    const handleCamelClick = () => {
        let ans = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
        {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
        setText(ans);
        props.showAlert("Text Converted to Camel Case", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been Removed", "success")
    }

    function countWords(text){
        let wc = text.split(" ").length;
        text.split(" ").forEach((word) => {
            if(!word.length){
                wc -= 1;  
            }
        });

        return wc;
    }


    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Enter text in the below text area</label>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange}></textarea>
                </div>

                <h5>Case Conversion</h5>

                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lower Case</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCamelClick}>Camel Case</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalizedCase}>Capitalized Case</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleAlternatingCase}>Alternating Case</button>
                <br /> <br />
                <h5>Miscellaneous</h5>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy }>Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>

            </div>
            <div className="container my-4">
                <h2>Text Summary</h2>
                <p>{countWords(text)} Words & {text.length} Characters</p>
                <p>{countWords(text) * 0.008 } Minutes will be taken to read text</p>

                <h2>Text Preview</h2>
                <p>{text}</p>

            </div>
        </>
    );
}

TextForm.propTypes = {};
