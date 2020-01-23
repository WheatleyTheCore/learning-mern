import React from 'react'
import axios from 'axios'

class DeleteBadgerFact extends React.Component {
    constructor(props) {
        super(props)

        axios.delete("http://localhost:4000/badgerFacts/delete/" + props.match.params.id)
            .then(res => {
                console.log(res)
                this.props.history.push("/")
            })
    }

    render() {
        return <div>Deleting your fact for you...</div>
    }
}

export default DeleteBadgerFact