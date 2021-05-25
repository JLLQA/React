import { useState } from 'react';

const ControlledInput = () => {

    const [userName, setUserName] = useState("Jordan");

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = JSON.stringify({ userName });
        console.log(dataToSend);
        setUserName("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>First</label>
                <input
                    id="userName"
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
            <h1>{userName}</h1>
        </>
    )
}

export default ControlledInput;