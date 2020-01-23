import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'

class EditBadgerFact extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/badgerFacts/" + this.props.match.params.id)
            .then(response => {
                this.setState({data: response.data.badgerFact_data})
                console.log(response.data.badgerFact_data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <div>
                <h3>Badger Facts Please!</h3>
                <CKEditor
                    editor={ClassicEditor}
                    data={this.state.data}
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const editorData = editor.getData();
                        this.setState({data: editorData})
                        console.log(this.state.data)
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
                <button className="btn btn-primary" onClick={() => {
                    let updatedFact = {
                        badgerFact_data: this.state.data.replace(/<\/?[^>]+(>|$)/g, "")
                    }
                    axios.post("http://localhost:4000/badgerFacts/update/" + this.props.match.params.id, updatedFact)
                        .then(response => {
                            console.log(response.data)

                            this.props.history.push("/")
                        })
                }}>Done!</button>
            </div>
        )
    }
    
}

export default EditBadgerFact
