import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'

let CreateNewBadgerFact = () => {
    const [data, setData] = useState('');

    return (
        <div>
            <h3>Badger Facts Please!</h3>
            <CKEditor
                editor={ClassicEditor}
                data="Hello from CKEditor 5!"
                onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const editorData = editor.getData()
                    setData(editorData)
                    console.log(data)
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            <button className="btn btn-primary" onClick={() => {

                const NewBadgerFact = {
                    badgerFact_data: data
                }

                axios.post("http://localhost:4000/badgerFacts/add", NewBadgerFact)
                    .then(res => console.log(res.data))

                console.log("WOOOO")
            }}>Done!</button>
        </div>
    )
}

export default CreateNewBadgerFact
