import React from 'react'

function FilterComponent(props) {
    return (
        <div className="filter" id="filter">
            <button id="btnFilter" onClick={props.filterPopup}>Filter<i className="fa fa-filter"></i></button>
            
            <form>
            <h1>Title</h1>
                <input type="text" placeholder="Key Word"
                    name="titleSearch"
                    value={props.titleSearch}
                    onChange={props.handleChange} />
                <br />
                <div className="yearBox">
                    <label>Year</label>
                    <br />
                    <input type="radio"
                        className="option-input radio"
                        name="dateSearch"
                        value="before"
                        checked={props.beforeRadio}
                        onChange={props.handleChange}
                    /> Before: &nbsp;
                        <input type="number" min="1900" max="2020" id="beforeYearSearch" name="beforeYearSearch" onChange={props.handleChange} value={props.beforeYear} />
                    &nbsp;
                <input type="radio"
                        className="option-input radio"
                        name="dateSearch"
                        value="after"
                        checked={props.afterRadio}
                        onChange={props.handleChange}
                    /> After: &nbsp;
                        <input type="number" min="1900" max="2020" id="afterYearSearch" name="afterYearSearch" onChange={props.handleChange} value={props.afterYear} disabled />
                    <br />
                    <br />
                    <input type="radio"
                        className="option-input radio"
                        name="dateSearch"
                        value="between"
                        checked={props.betweenRadio}
                        onChange={props.handleChange}
                    /> Between: &nbsp;
                        <input type="number" min="1900" max="2020" id="betweenStartingYearSearch" name="betweenStartingYearSearch" onChange={props.handleChange} value={props.betweenStartYear} disabled />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <input type="number" min="1900" max="2020" id="betweenEndingYearSearch" name="betweenEndingYearSearch" onChange={props.handleChange} value={props.betweenEndYear} disabled />
                </div>
                <br />
                <div className="ratingBox">
                <label>Ratings</label>
                <br />
                <input type="radio"
                    className="option-input radio"
                    name="ratingSearch"
                    value="below"
                    checked={props.belowRadio}
                    onChange={props.handleChange}
                /> Below: {props.belowSlider}
                &nbsp;&nbsp;
                <input type="range" min="1" max="10" name="belowRating" value={props.belowSlider} onChange={props.handleChange} className="slider" id="belowRating"></input>
                &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio"
                        className="option-input radio"
                        name="ratingSearch"
                        value="above"
                        checked={props.aboveRadio}
                        onChange={props.handleChange}
                    /> Above: {props.aboveSlider}
                    &nbsp;&nbsp;
                        <input type="range" min="1" max="10" name="aboveRating" value={props.aboveSlider} onChange={props.handleChange} className="slider" id="aboveRating" disabled></input>
                    <br/>
                    <input type="radio"
                        className="option-input radio"
                        name="ratingSearch"
                        value="betweenRatings"
                        checked={props.betweenRatingRadio}
                        onChange={props.handleChange}
                    /> Between: {props.betweenStartSlider} And {props.betweenEndSlider}&nbsp;
                        <input type="range" min="1" max="10" name="betweenStartRating" value={props.betweenStartSlider} onChange={props.handleChange} className="slider" id="betweenStartRating" disabled></input>
                    &nbsp;&nbsp;
                        <input type="range" min="1" max="10" name="betweenEndRating" value={props.betweenEndSlider} onChange={props.handleChange} className="slider" id="betweenEndRating" disabled></input>
                </div>
                <button onClick={props.handleSubmit}>Search</button>
                <button onClick={props.handleClear}>Clear</button>
            </form>

        </div>
    )
}

export default FilterComponent
