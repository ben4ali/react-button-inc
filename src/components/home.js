import { useState, useEffect } from "react";
import { ButtonList } from "./ButtonList";
import { useFetch } from "./useFetch";

export const Home = () => {
    const [name, setName] = useState('Ali');
    const { data: buttons, isPending, error } = useFetch('http://localhost:8080/buttons')

    return (
        <div className="home">
            <h1>Welcome {name}, do you like these buttons ?</h1>
            <hr></hr>
            <h1>Buttons</h1>
            {error && <div className="errorText"><p>{error}</p></div>}
            {isPending && <div>Loading...</div>}
            {!isPending && <ButtonList buttons={buttons} />}
        </div>
    )
};