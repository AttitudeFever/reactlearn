import React from 'react'
import { Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Main from './components/Main'

class App extends React.Component {
    constructor(){
        super()
        this.state={
            searchValue : "",
            searchFLAG:false,
            listAllFLAG:false
        }
        this.getSearchValue = this.getSearchValue.bind(this);
        this.getFLAGS = this.getFLAGS.bind(this);
    }

    getSearchValue(searchValue){
        this.setState( {searchValue : searchValue} )
    }

    getFLAGS(searchFLAG, listAllFLAG){
        this.setState( {searchFLAG : searchFLAG, listAllFLAG : listAllFLAG} );
    }
    
    render(){
        return (
            <main>
                <Route path="/about" exact component={About} />

                <Route path="/" exact render={ (props) => <Home getSearchValue={this.getSearchValue} getFLAGS={this.getFLAGS} />}/>

                <Route path="/main" exact render={ (props) => <Main searchValue={this.state.searchValue} searchFLAG={this.state.searchFLAG} 
                    listAllFLAG={this.state.listAllFLAG} />}/>
            </main>
        )
    }
}

export default App










