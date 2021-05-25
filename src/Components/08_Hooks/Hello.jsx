import { useEffect } from 'react';

const Hello = ({ name }) => {
    const message = `Hello ${name}!`;

    useEffect(() => {
        console.log(`Running useEffect ${name}`);
        document.title = `Hello to ${name}`;
    }, [name]);

    return <div>{message}</div>;
}

export default Hello;