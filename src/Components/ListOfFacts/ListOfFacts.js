import React from 'react'
import axios from 'axios'

class ListOfFacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            facts: []
        }

        
    }

    componentDidMount() {
        axios.get("http://localhost:4000/badgerFacts/")
            .then(response => {
                this.setState({facts: response.data})
                console.log(response.data)
            })
            .catch(err => {
                console.error(err)
            })
        
    }
    
    render() {
        return (
            this.state.facts.map(fact => {
                return (
                    <div>
                       {fact.badgerFact_data}
                       <hr />
                    </div>
                )
            })
        )
    } 
}

export default ListOfFacts
