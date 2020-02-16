import React from 'react'
import SingleMovieBrief from './SingleMovieBrief';
//import CSSTransitionGroup from 'react-addons-css-transition-group'
import { CSSTransitionGroup } from 'react-transition-group'

let renderThis;
class AllMovieList extends React.Component {
    constructor(){
        super()
        this.state={}
        this.conditionalRendering = this.conditionalRendering.bind(this);
    }

    conditionalRendering(){
        if (this.props.searchFLAG) 
        {
            const found = this.props.movieData.filter(item => {
                return item.title.toUpperCase().includes(this.props.searchValue.toUpperCase())
            })
            
            if (found.length === 0){
            renderThis = <p className="noResult">Search Result For "{this.props.searchValue}" Not Found! Try Search Again.
                <br/>Or Try Filter option
            </p>
            }
            else {
                renderThis = found.map((item, index) => {
                    return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} tagline={item.tagline}/>
                })
            }
        }
        else if (this.props.listAllFLAG) {
            renderThis = this.props.movieData.map((item, index) => {
                return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} tagline={item.tagline}/>
            })
        }
        else if (this.props.filterFLAG) {

            if (this.props.filterResult.length === 0) {
                renderThis = <p className="noResult">No Matches Found! Try Again With Better Filtering.</p>
            }
            else {
                renderThis = this.props.filterResult.map((item, index) => {
                    return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average} addToFav={this.props.addToFav} id={item.id} tagline={item.tagline}/>
                })
            }
        }
    }

    render() {
        this.conditionalRendering();
        return (
            <div className="listContainer" id="listContainer">
                <div className="fa fa-sort-amount-asc" id="sort">
                    <select onChange={this.props.doSort}>
                        <option className="option" value="sortByTitle">Title</option>
                        <option className="option" value="sortByYear">Year</option>
                        <option className="option" value="sortByRating">Rating</option>
                    </select>
                </div>
                <div className="list" id="list">
                    {
                        <CSSTransitionGroup
                            transitionName="fadeb"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={0}>
                            {renderThis}
                        </CSSTransitionGroup>
                    }
                </div>
            </div>
        )
    }
}

export default AllMovieList
