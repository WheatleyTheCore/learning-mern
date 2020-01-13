import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

let CreateNewBadgerFact = () => {
    const [data, setData] = useState('');

    return (
        <div>
            <h3>Badger Facts Please!</h3>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const editorData = editor.getData();
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
                console.log("WOOOO")
            }}>Done!</button>
        </div>
    )
}

export default CreateNewBadgerFact
