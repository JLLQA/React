import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Grid = ({ data }) => {

    const [ready, setReady] = useState(false);
    const [objArray, setObjArray] = useState([]);

    useEffect(() => {
        let array = [];

        while (data.length) {
            array.push(data.splice(0,10));
        }

        setObjArray(array);
        setReady(true);
    }, []);

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
                        {objArray.map((ten, i) => (
                            <tr key={i}>
                                <TableRow objects={ten}/>
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