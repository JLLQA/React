import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Grid = ({ data, refresh, setRefresh }) => {

    const [ready, setReady] = useState(true);
    const [objArray, setObjArray] = useState([]);
    let array = [];


    // useEffect(() => {
    const a = () => {

        while (data.length) {
            array.push(data.splice(0, 10));
        }
        console.log(array);
        // setReady(true);
    }
    // }, []);

    a();

    console.log("The" + array)


    if (ready) {
        return (
            <div id="img-grid" className="container-fluid">
                <table id="img-table">
                    <thead>
                        <tr>
                            <th></th><th></th>
                            <th></th><th></th>
                            <th></th><th></th>
                            <th></th><th></th>
                            <th></th><th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((ten, i) => (
                            <tr key={i}>
                                <TableRow objects={ten} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
}

export default Grid;