import React from 'react'
import SingleMovieBrief from './SingleMovieBrief';

let renderThis;
class AllMovieList extends React.Component {
    constructor(){
        super()
        this.state={}
        //this.conditionalRendering = this.conditionalRendering.bind(this);
    }

    conditionalRendering(){
        if (this.props.searchFLAG) 
        {
            const found= this.props.movieData.filter( item => {
                return item.title.toUpperCase() === this.props.searchValue.toUpperCase() 
            })
            
            if (found.length === 0){
                renderThis = <p>Not Found</p>
            }
            else {
                renderThis =  found.map(( item, index)=> {
                    return <SingleMovieBrief  key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average}/>
                })
            }
        }
        else if(this.props.listAllFLAG)
        {
            renderThis = this.props.movieData.map( (item, index) =>{
                return <SingleMovieBrief key={index} poster={item.poster} title={item.title} release_date={item.release_date} ratings={item.ratings.average}/>
            })
        }
    }

    render(){
        this.conditionalRendering();
        return (
            <div className="list">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th> 
                            <th>Ratings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            renderThis
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AllMovieList
