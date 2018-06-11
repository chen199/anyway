import React, { Component } from 'react'
import Card from './Card/Card'

class App extends Component {
    render(){
        return (
            <div>
                <h2>Hello whats up whats up</h2>
                { [1,2,3,4,5].map(n => <Card value={n}/>)}
            </div>
        )
    }
}

export default App