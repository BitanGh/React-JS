import React,{useState} from 'react'


export default function Textform(props) {
    const handleupclick = () =>{
        console.log("Uppercase clicked")
        let newtext = text.toLocaleUpperCase()
        setText(newtext)
    }
    const handlelowclick = () =>{
        console.log("Lowercase Clicked")
        let newtext2 = text.toLowerCase()
        setText(newtext2)
    }
    const handleonchange= (event) =>{
        console.log("On Change")
        setText(event.target.value);//By this we can change and assign new values in our value = {text} variable and it'll also get updated
    }
    const [text,setText] = useState( );
  return (
    <><div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="mb-3">

    <label for="Textform" className="form-label"><h3>{props.write}</h3></label>
    <textarea className="form-control" value = {text} onChange={handleonchange}id="Textform" rows="7"></textarea> 
    <button type="button" className="btn btn-primary btn-sm " onClick={handleupclick}>Convert to Uppercase</button>
    <button type="button" className="btn btn-primary btn-sm " onClick={handlelowclick}>Convert to Lowercase</button>
     <br />
     <h1>Your Text Summary</h1>
     <p>{text.length} words and {text.length} characters</p>
     <p>{0.008*text.split(" ").length} minutes to read </p>
     <br />
     <h2>Preview</h2>
     <p>{text}</p>
  </div></>
   
  )
}
