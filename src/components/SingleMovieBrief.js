import React from 'react'

function SingleMovieBrief(props) {
    const poster = "https://image.tmdb.org/t/p/w92/" + props.poster;
    return (
        <tr>
            <td>
                <img src={poster} alt={props.title} /> {props.title}
            </td>
            <td> 
                {props.release_date}
            </td>
            <td> 
                {props.ratings}
            </td>
            <td> 
                <button className="btn btn-5"><i className="fa fa-heart"></i></button> 
            </td>
            <td> 
                <button className="btn btn-5"><i className="fa fa-eye"></i></button> 
            </td>
        </tr>
    )
}

export default SingleMovieBrief
