import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "./display/Grid";
import Pages from "./display/Pages";

const Disney = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`http://api.disneyapi.dev/characters?page=${page}`)
        .then((res) => {
            setData(res.data.data);
            setIsLoaded(true);
        }).catch((err) => {
            console.log(err.message);
            setIsLoaded(true);
        });
    }, []);

    const changePage = (e) => setPage(e.target.id);

    if (isLoaded) {
        return (
            <>
                <Grid data={data}/>
                <Pages changePage={changePage}/>
            </>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
        
}

export default Disney;