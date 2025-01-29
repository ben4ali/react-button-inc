import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Create = () =>{

    const [title,setButtonTitle] = useState("Button Title");
    const [content,setButtonContent] = useState("Button Content");
    const [color,setButtonColor] = useState("#68c0dd");
    const [description,setButtonDesc] = useState("Button Description");
    const [isPending, setIsPending] = useState(false);
    const [isComplete, setIsComplete] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newButton = { title, content, color, description};
        setIsPending(true)
        fetch('http://localhost:8080/buttons',{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newButton)
        }).then(()=>{
            console.log('new blog added')
            setIsComplete(true)
            navigate(-1);
        })
    }

    return(
        <div className="create">
            <h2>Add a new button</h2>
            <div className="createHolder">
                <div className="button" style={{backgroundColor:color}}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <p>{color}</p>
                </div>
                <div className="descriptionHolder">
                    <form onSubmit={handleSubmit} className="formHolder">
                        <label>Button title</label>
                        <input
                            onChange={(e)=>setButtonTitle(e.target.value)}
                            type="text"
                            color={color}
                            required
                        />

                        <label>Button content</label>
                        <input
                            onChange={(e)=>setButtonContent(e.target.value)}
                            type="text"
                            required
                        />

                        <label>Button color</label>
                        <input
                            onChange={(e)=>setButtonColor(e.target.value)}
                            type="color"
                            required
                        />

                        <label>Button description</label>
                        <textarea 
                        onChange={(e)=>setButtonDesc(e.target.value)} 
                        required
                        >
                        </textarea>
                        {!isPending && <button>CREATE</button>}
                        {isPending && !isComplete && <button disabled>ADDING BUTTON....</button>}
                        {isComplete && isPending && <button disabled>BUTTON CREATED</button>}
                    </form>
                </div>
            </div>
        </div>
    )
}