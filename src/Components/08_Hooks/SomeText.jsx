import { useState } from "react";

const SomeText = ({ text, maxLength }) => {
    const [hidden, setHidden] = useState(true);

    if (text.length <= maxLength) {
        return <span>{text}</span>
    }

    return (
        <span>

            {hidden ? (
                <a onClick={() => setHidden(false)}> Read More: </a>
            ) : (
                <a onClick={() => setHidden(true)}> Read Less: </a>
            )}

            {hidden ? `${text.substr(0, maxLength).trim()}...` : text}

        </span>
    );
}

export default SomeText;