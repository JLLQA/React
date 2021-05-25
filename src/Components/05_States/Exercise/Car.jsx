import { useState } from 'react';

const Car = () => {
    const [make, setMake] = useState("Audi");
    const [model, setModel] = useState("A5");
    const [colour, setColour] = useState("Black");
    const [year, setYear] = useState(2014);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = JSON.stringify({ make, model, colour, year });
        console.log(dataToSend);
        setMake("");
        setModel("");
        setColour("");
        setYear("");
    }

    return (
        <>
            <h1>My car:</h1>

            <form onSubmit={handleSubmit}>
                <label> Make:</label>
                <input name="make"
                    type="text"
                    value={make}
                    onChange={e => setMake(e.target.value)}
                />
                <br></br><br></br>
                <label> Model:</label>
                <input name="model"
                    type="text"
                    value={model}
                    onChange={e => setModel(e.target.value)}
                />
                <br></br><br></br>
                <label> Colour:</label>
                <input name="colour"
                    type="text"
                    value={colour}
                    onChange={e => setColour(e.target.value)}
                />
                <br></br><br></br>
                <label> Year:</label>
                <input name="year"
                    type="text"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                />
                <br />
                <br></br>
                <button type="submit">
                    Submit
                </button>
            </form>

            <p><b>Make:</b> {make}</p>
            <p><b>Model:</b> {model}</p>
            <p><b>Colour:</b> {colour}</p>
            <p><b>Year:</b> {year}</p>
        </>
    );
}

export default Car;