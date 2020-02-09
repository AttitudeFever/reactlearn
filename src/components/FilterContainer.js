import React from 'react'
import FilterComponent from './FilterComponent'

class FilterContainer extends React.Component {
    constructor(){
        super()
        this.state={
            titleSearch : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        if (name === "titleSearch")
        {
            this.setState( {titleSearch : value} )
        }        
    }

    handleSubmit(e){
        e.preventDefault();
        const found = this.props.movieData.filter(item =>{
            return item.title.toUpperCase().includes( this.state.titleSearch.toUpperCase() )
        })
        this.props.getFilterResult(found)
    }

    render() {
        return (
            <FilterComponent titleSearch={this.state.titleSearch} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default FilterContainer
