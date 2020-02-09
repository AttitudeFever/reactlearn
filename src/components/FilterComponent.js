import React from 'react'

function FilterComponent(props) {
    return (
        <div className="filter">
            <h1>Advance Movie Search</h1>
            <form>
                <label>Title</label>
                <input type="text" placeholder="Title search key word" 
                        name="titleSearch" 
                        value={props.titleSearch} 
                        onChange={props.handleChange}/>

                <label>Year</label>
                <input type="radio"
                    name="dateSearch"
                    value="before"
                //checked = {}
                //onChange = {props.handleChange}
                /> Before
                        <input type="text" placeholder="Before Year" />

                <input type="radio"
                    name="dateSearch"
                    value="after"
                //checked = {}
                //onChange = {props.handleChange}
                /> After
                        <input type="text" placeholder="After Year" />

                <input type="radio"
                    name="dateSearch"
                    value="between"
                //checked = {}
                //onChange = {props.handleChange}
                /> Between
                        <input type="text" placeholder="Starting Year" />
                <input type="text" placeholder="Ending Year" />

                <label>Ratings</label>
                <input type="radio"
                    name="ratingSearch"
                    value="below"
                //checked = {}
                //onChange = {props.handleChange}
                /> Below
                        <input type="range" min="1" max="10" value="50" className="slider" id="belowRating"></input>

                <input type="radio"
                    name="ratingSearch"
                    value="above"
                //checked = {}
                //onChange = {props.handleChange}
                /> Above
                        <input type="range" min="1" max="10" value='' className="slider" id="aboveRating"></input>

                <input type="radio"
                    name="ratingSearch"
                    value="between"
                //checked = {}
                //onChange = {props.handleChange}
                /> Between
                        <input type="range" min="1" max="10" value="" className="slider" id="betweenRating"></input>
                
                <button onClick={props.handleSubmit}>Search</button>
                <button>Clear</button>
            </form>

        </div>
    )
}

export default FilterComponent
