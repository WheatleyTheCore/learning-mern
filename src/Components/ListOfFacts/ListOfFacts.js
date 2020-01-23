import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
                       <Link to={"/edit/" + fact._id}>
                           edit
                       </Link>
                       <Link to={"/delete/" + fact._id}>
                           delete
                       </Link>
                       <hr />
                    </div>
                )
            })
        )
    } 
}

export default ListOfFacts
