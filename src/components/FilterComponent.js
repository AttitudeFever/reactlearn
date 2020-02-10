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
                    checked = {props.beforeRadio}
                    onChange = {props.handleChange}
                /> Before
                        <input type="number" min="1900" max="2020" id="beforeYearSearch" name="beforeYearSearch" onChange={props.handleChange} value={props.beforeYear}/>

                <input type="radio"
                    name="dateSearch"
                    value="after"
                    checked = {props.afterRadio}
                    onChange = {props.handleChange}
                /> After
                        <input type="number" min="1900" max="2020" id="afterYearSearch" name="afterYearSearch" onChange={props.handleChange} value={props.afterYear} disabled/>

                <input type="radio"
                    name="dateSearch"
                    value="between"
                    checked = {props.betweenRadio}
                    onChange = {props.handleChange}
                /> Between
                        <input type="number" min="1900" max="2020" id="betweenStartingYearSearch" name="betweenStartingYearSearch" onChange={props.handleChange} value={props.betweenStartYear} disabled/>
                        <input type="number" min="1900" max="2020" id="betweenEndingYearSearch" name="betweenEndingYearSearch" onChange={props.handleChange} value={props.betweenEndYear} disabled/>

                <label>Ratings</label>
                <input type="radio"
                    name="ratingSearch"
                    value="below"
                    checked = {props.belowRadio}
                    onChange = {props.handleChange}
                /> Below
                        <input type="range" min="1" max="10" name="belowRating" value={props.belowSlider} onChange={props.handleChange} className="slider" id="belowRating"></input>
                        <p>Below:{props.belowSlider}</p>

                <input type="radio"
                    name="ratingSearch"
                    value="above"
                    checked = {props.aboveRadio}
                    onChange = {props.handleChange}
                /> Above
                        <input type="range" min="1" max="10" name="aboveRating" value={props.aboveSlider} onChange={props.handleChange} className="slider" id="aboveRating" disabled></input>
                        <p>Above:{props.aboveSlider}</p>

                <input type="radio"
                    name="ratingSearch"
                    value="betweenRatings"
                    checked = {props.betweenRatingRadio}
                    onChange = {props.handleChange}
                /> Between
                        <input type="range" min="1" max="10" name="betweenStartRating" value={props.betweenStartSlider} onChange={props.handleChange} className="slider" id="betweenStartRating" disabled></input>
                        <input type="range" min="1" max="10" name="betweenEndRating" value={props.betweenEndSlider} onChange={props.handleChange} className="slider" id="betweenEndRating" disabled></input>
                        <p>Between:{props.betweenStartSlider} And {props.betweenEndSlider}</p>
                
                <button onClick={props.handleSubmit}>Search</button>
                <button onClick={props.handleClear}>Clear</button>
            </form>

        </div>
    )
}

export default FilterComponent
