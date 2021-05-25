import { useState } from "react";
import SomeText from "./SomeText"
import Hello from "./Hello"


const Shopping = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState([]);
    const [maxLen, setMaxLen] = useState([]);

    const addItem = event => {
        event.preventDefault();
        setItems([...items,
        {
            id: items.length,
            name: itemName
        }]);
        setItemName("");
    }

    return (
        <>
            <Hello
                name={itemName}
            />

            <form onSubmit={addItem}>
                <input
                    type="text"
                    placeholder="Enter max length:"
                    name="max"
                    value={maxLen}
                    onChange={(e) => setMaxLen(e.target.value)} />
                <br></br>
                <br></br>
                <input
                    type="text"
                    placeholder="Enter item name:"
                    name="item"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)} />
                <button
                    type="submit">
                    Add Item
                </button>
                <br></br>
                <br></br>
            </form>

            <SomeText
                text={itemName}
                maxLength={maxLen}
            />

            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
}

export default Shopping;