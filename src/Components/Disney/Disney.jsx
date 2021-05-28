import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "./display/Grid";
import Pages from "./display/Pages";

const Disney = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const [page, setPage] = useState(1);
    const [refresh, setRefresh] = useState(1);

    // var URL = ``;
    // console.log(URL);

    useEffect(() => {
        axios.get(`https://api.disneyapi.dev/characters?page=${page}`)
            .then((res) => {
                setData(res.data.data)
                setIsLoaded(true);
                // console.log(res.data.data);
            }).catch((error) => {
                setIsLoaded(true);
                console.log(error.message);
            });
    }, [page]);
    console.log(data);

    // const changePage = (e) => setPage(e.target.id);

    if (isLoaded) {
        return (
            <>
                <Grid data={data} setRefresh={setRefresh} refresh = {refresh}/>
                <Pages changePage={setPage} />
            </>
        );
    } else {
        return (
            <h1> Loading! </h1>
        )
    };
}

export default Disney;