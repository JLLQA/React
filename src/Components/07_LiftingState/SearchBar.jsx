const SearchBar = ({ query, queryFunction, completed, completedFunction }) => {

    return (
        <>
            <label>Search:</label>
            <input
                type="text"
                name="q"
                id="q"
                value={query}
                onChange={queryFunction}
            />
            <label>Show completed:</label>
            <input
                type="checkbox"
                value={completed}
                onChange={completedFunction}
            />
        </>
    )
}

export default SearchBar;