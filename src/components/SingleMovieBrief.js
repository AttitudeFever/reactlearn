import React from 'react'

function SingleMovieBrief(props) {
    const poster = "https://image.tmdb.org/t/p/w92/" + props.poster;
    return (
        <div>
            <img src={poster} alt={props.title} />
        </div>
    )
}

export default SingleMovieBrief
