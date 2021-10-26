import React, { Component } from "react";
// import { useEffect, useState, useRef } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "./style/createThread.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CloseIcon from "./close.svg";
import axios from "axios";
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
let Token = localStorage.getItem("tokenLogin");
export default class TextEditor extends Component {
    constructor(props) {
        super(props);
        // this.buttonRef = React.createRef();
        //     const contentState = convertFromRaw(content);
        const editorState = EditorState.createEmpty();

        this.state = {
            title: "",
            // contentState,
            editorState,
            img: null,
            file: null,
            category: "default",
        };
        this.handleChangeImg = this.handleChangeImg.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    // state = {
    //     editorState: EditorState.createEmpty(),
    // };

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        console.log(e.target.value, "target");
        this.setState({ ...this.state, [name]: value });
    }

    // onContentStateChange: Function = (contentState) => {
    //     this.setState({
    //         contentState: JSON.stringify(contentState, null, 4),
    //     });
    // };

    handleChangeImg(img) {
        this.setState({
            file: URL.createObjectURL(img.target.files[0]),
        });
        this.setState({
            img: img.target.files[0],
        });
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const testing = new FormData();
        testing.append("title", this.state.title);
        testing.append("content", this.state.editorState);
        testing.append("image", this.state.img);
        testing.append("category", this.state.category);

        axios({
            method: "POST",
            url: "https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/create",
            data: testing,
            headers: {
                Authorization: `Bearer ${Token} `,
            },
        })
            .then((res) => {
                console.log(res, "ini create thread");
            })
            .catch((err) => {
                console.log(err, "error create thread");
                alert("error create thread");
            });
    };

    render() {
        console.log(this.state, "hasil");
        const { editorState } = this.state;
        // const { contentState } = this.state;
        // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())), "editor");
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
                            // required
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
                        onEditorStateChange={this.onEditorStateChange}
                        className="toolbarClassName"
                        // onContentStateChange={this.onContentStateChange}
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
                                <option value="6166eed398472010a2d7e97e">Music</option>
                            </select>
                        </div>
                        <div className="createThread-PostButton">
                            <button>Post</button>
                        </div>
                    </div>
                </form>

                {/* <textarea
                    disabled
                    value={draftToHtml(convertToRaw(contentState.getCurrentContent()))}
                /> */}
            </div>
        );
    }
}
