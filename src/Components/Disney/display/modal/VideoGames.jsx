const VideoGames = ({ videogames }) => {

    return (
        <>
            <h4>TV Shows</h4>
            <ul>
                {videogames.map((videogame, i) => (
                    <li key={i}>
                        {videogame}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default VideoGames;