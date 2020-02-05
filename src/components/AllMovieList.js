import React from 'react'
import SingleMovieBrief from './SingleMovieBrief';

function List(props) {
    return (
        <div className="list">
            {
                props.movieData.map( (item, index) =>{
                    return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average}/>
                })
            }
        </div>
    )
}

export default List
