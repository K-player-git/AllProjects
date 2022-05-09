import { useState } from "react"
import React from 'react'

export default function TextForm() {
    const [text, setText] =  useState('Text')
    
    const changeTextArea = (e) => {
        setText(e.target.value)
    }
    return (
        <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={changeTextArea} style={{height:'100px',color:'blue'}}></textarea>
            <label for="floatingTextarea">Comments</label>
            <button className="btn btn-primary my-2" onClick={()=>setText('Allu')}>Button</button>
        </div>
        // Adding more logic
    )
}
