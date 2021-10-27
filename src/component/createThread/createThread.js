import React, { Component } from "react";
// import { useEffect, useState, useRef } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "./style/createThread.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CloseIcon from "./close.svg";
// import iconUpload from "../banner-profile/assets/upload.svg";
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
        // this.buttonRef = React.createRef();
        const contentState = convertFromRaw(content);
        this.state = {
            title: "",
            contentState,

            file: null,
            category: "default",
        };
        this.handleChangeImg = this.handleChangeImg.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        editorState: EditorState.createEmpty(),
    };
    // onEditorStateChange = (editorState) => {
    //     this.setState({
    //         editorState,
    //     });
    // };

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        console.log(e.target.value, "target");
        this.setState({ ...this.state, [name]: value });
    }

    onContentStateChange: Function = (contentState) => {
        this.setState({
            contentState,
        });
    };

    handleChangeImg(img) {
        this.setState({
            file: URL.createObjectURL(img.target.files[0]),
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const item = {};
        item.category = this.state.category;
        console.log(item.category, "submit");
    };

    render() {
        console.log(this.state, "hasil");
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
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder="Thread title"
                            required
                        />
                    </div>
                    <label>Image Thread</label>
                    <div className="createThread-img-container">
                        <input
                            type="file"
                            placeholder="image"
                            onChange={this.handleChangeImg}
                            className="custom-file-input"
                            required
                        />
                        <img src={this.state.file} style={{ width: "130px" }} />
                    </div>

                    <label>Story</label>
                    <Editor
                        // editorState={editorState}
                        toolbar={{
                            options: ["inline", "list", "textAlign", "link"],
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
                    <div className="createthrea-optionPost-container">
                        <div className="createThread-option-container">
                            <select
                                id="category"
                                className="createThread-option"
                                name="category"
                                value={this.state.category}
                                onChange={this.handleChange}
                                required>
                                <option value="">Pilih Category</option>
                                <option value="travel">Travel</option>
                                <option value="Game">Game</option>
                                <option value="Cooking">Cooking</option>
                                <option value="DIY">DIY</option>
                                <option value="Sport">Sport</option>
                                <option value="Music">Music</option>
                            </select>
                        </div>
                        <div className="createThread-PostButton">
                            <button>Post</button>
                        </div>
                    </div>
                </form>

                <textarea disabled value={JSON.stringify(contentState, null, 4)} />
            </div>
        );
    }
}
