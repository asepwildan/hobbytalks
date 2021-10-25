import React, { Component } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import draftToHtml from "draftjs-to-html";
import "./style/createThread.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
    render() {
        // const { editorState } = this.state;
        const { contentState } = this.state;
        // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

        // console.log(draftToHtml( JSON.stringify(contentState, null, 4));
        return (
            <div className="textEditorContainer">
                <h3>Create a Thread</h3>
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
                <textarea disabled value={JSON.stringify(contentState, null, 4)} />
            </div>
        );
    }
}
