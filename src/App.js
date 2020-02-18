import React from 'react'
import { Route } from 'react-router-dom';
import Home from './components/Home'
import Main from './components/Main'

class App extends React.Component {
    constructor(){
        super()
        this.state={
            searchValue : "",
            searchFLAG:false,
            listAllFLAG:false,
            filterFLAG:false
        }
        this.getSearchValue = this.getSearchValue.bind(this);
        this.getFLAGS = this.getFLAGS.bind(this);
    }

    getSearchValue(searchValue){
        this.setState( {searchValue : searchValue} )
    }

    getFLAGS(searchFLAG, listAllFLAG, filterFLAG){
        this.setState( {searchFLAG : searchFLAG, listAllFLAG : listAllFLAG, filterFLAG : filterFLAG} );
    }
    
    render(){
        return (
            <main id="main">
                <Route path="/" exact render={ (props) => <Home getSearchValue={this.getSearchValue} getFLAGS={this.getFLAGS} />}/>
                <Route path="/main" exact render={ (props) => <Main searchValue={this.state.searchValue} 
                    searchFLAG={this.state.searchFLAG} listAllFLAG={this.state.listAllFLAG} 
                    filterFLAG={this.state.filterFLAG} getFLAGS={this.getFLAGS}/>}/>
            </main>
        )
    }
}

export default App










