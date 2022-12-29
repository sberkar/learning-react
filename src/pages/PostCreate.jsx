import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import "./css/PostCreate.css"

function PostCreate() {
    const editor = useRef(null)
    const [content, setContent] = useState("")

    return <div className="post-create">
        <div className="pc-header">
            <ul className="pc-actions">
                <li className="pc-action">
                    <button className="save-btn">Save Draft</button>
                </li>
                <li className="pc-action">
                    <button className="publish-btn">
                        Publish
                    </button>
                </li>
                <li className="pc-action">
                    <button className="preview-btn">Preview</button>
                </li> 
            </ul>
        </div>
        <div className="post-title">
            <input type="text" placeholder="Enter Post Title"/>
        </div>
        <div className="post-body">
            <JoditEditor
            ref={editor}
            value={content}
            onChange={newContent => setContent(newContent)}
            /> 
        </div>
    </div>
}

export default PostCreate;