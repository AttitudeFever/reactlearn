import React from 'react'
import { Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Main from './components/Main'

class App extends React.Component {
    constructor(){
        super()
        this.state={}
    }
    
    render(){
        return (
            <main>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/main" exact component={Main} />

            </main>
        )
    }
}

export default App










