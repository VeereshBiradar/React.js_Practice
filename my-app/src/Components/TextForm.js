import React, { useState } from 'react'



export default function TextForm(props) {

    const handleupclick = () => {
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowclick = () => {
        console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearclick = () => {
        console.log("uppercase was clicked" + text);
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("box");
        text.select();
        //text.setSelectionRange(0, 9);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const [text, setText] = useState("Please write your thoughts here!!!");
    //text = "new text"; //wrong way to change the state
    // setText("new text");  //correct way to change the state
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    {/* <label for="text" class="form-label">Example textarea</label> */}
                    <textarea class="form-control" value={text} onChange={handleOnChange}
                        id="box" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupclick}>uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelowclick}>lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearclick}>clear</button>

                <button className="btn btn-primary mx-2" onClick={handleCopy}>copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <br></br>
            <div className="conatiner1" my-2>
                <h3>I am awesome MERN Stack Developer</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}minute read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something you want to preview it"}</p>
            </div>
        </>
    )
}
