

import React, {useState}  from "react";

const Correction = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [alltodo, setalltodo] = useState([])

    const save = ()=>{
        let todos = {
            title, 
            content
        }
        console.log (todos);
        setalltodo([...alltodo, todos])
        settitle("")
        setcontent("")
        console.log(alltodo)
    }
  return (
    <div>
        <div className="mt-10 mb-10">
            <h1>Todo List</h1>
            <input type="text" onChange={(e)=>settitle(e.target.value)} name="" placeholder="Title" />
            <input type="text"  onChange={(e)=>setcontent(e.target.value)} name="" placeholder="Content" />
            <button onClick={save} >Add Todo</button>
        </div>
    </div>
  )
}

export default Correction;


