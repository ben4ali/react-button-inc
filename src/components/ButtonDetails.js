import { data, useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const ButtonDetails = () =>{
    const { id } = useParams();
    const { data: button, isPending, error } = useFetch(`http://localhost:8080/buttons?id=${id}`)
    const navigate = useNavigate()

    const handleClick = () =>{
        fetch('http://localhost:8080/buttons/'+button[0].id,{
            method:'DELETE'
        }).then(()=>{
            navigate(-1)
        })
    }

    return(
        <div className="buttonDetails">
            <h2>Button details - { id }</h2>
            {error && <div className="errorText"><p>{error}</p></div>}
            {isPending && <div>Loading...</div>}
            {!isPending && <Button button={button}/>}
            <hr></hr>
            <button onClick={handleClick} className="deleteBtn">Delete</button>
            
        </div>
    );
}