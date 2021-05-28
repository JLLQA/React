const TV = ({ tvs }) => {

    return (
        <>
            <h4>TV Shows</h4>
            <ul>
                {tvs.map((tv, i) => (
                    <li key={i}>
                        {tv}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TV;