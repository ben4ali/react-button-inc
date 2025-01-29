import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, { signal: abortCont.signal})
            .then(res => {
                if (!res.ok) {
                    setError('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log("Fetch aborted")
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        },1);
        return () => abortCont.abort();
    },[url]);
    return { data, isPending, error }
}