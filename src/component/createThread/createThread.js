import React, { Component } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "./style/createThread.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CloseIcon from "./close.svg";

const content = {
    entityMap: {},
    blocks: [
        {
            key: "637gr",
            text: "Initialized from content state.",
            type: "unstyled",
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
    ],
};
export default class TextEditor extends Component {
    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
            contentState,
        };
    }

    state = {
        editorState: EditorState.createEmpty(),
    };
    // onEditorStateChange = (editorState) => {
    //     this.setState({
    //         editorState,
    //     });
    // };

    onContentStateChange: Function = (contentState) => {
        this.setState({
            contentState,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
    };
    render() {
        // const { editorState } = this.state;
        const { contentState } = this.state;
        // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

        // console.log(draftToHtml( JSON.stringify(contentState, null, 4));
        return (
            <div className="textEditorContainer">
                <div className="createThread-Title-Container">
                    <p>Create a Thread</p>
                </div>

                <form onSubmit={this.onSubmit}>
                    <div className="createThread-title-container">
                        <label>Title</label>
                        <input type="text" placeholder="Thread title" required />
                    </div>
                    <label>Story</label>
                    <Editor
                        // editorStyle={{ visibility: "visible" }}
                        // editorState={editorState}
                        toolbar={{
                            options: ["inline", "list", "textAlign", "link", "image"],
                            inline: { options: ["bold", "italic", "underline"] },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            list: { options: ["unordered"] },
                        }}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        // onEditorStateChange={this.onEditorStateChange}
                        className="toolbarClassName"
                        onContentStateChange={this.onContentStateChange}
                    />
                    <div className="label-createThread-category-container">
                        <label>Category</label>
                    </div>
                    <div className="createThread-option-container">
                        <select id="category" className="createThread-option" required>
                            <option value="" selected="selected">
                                Pilih Category
                            </option>
                            <option value="">Travel</option>
                            <option value="">Game</option>
                            <option value="">Cooking</option>
                            <option value="">DIY</option>
                            <option value="">Sport</option>
                            <option value="">Music</option>
                        </select>
                    </div>
                    <div className="createThread-PostButton">
                        <button>Post</button>
                    </div>
                </form>

                <textarea disabled value={JSON.stringify(contentState, null, 4)} />
            </div>
        );
    }
}
