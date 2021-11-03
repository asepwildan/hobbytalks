import React, { Component } from "react";
// import { useEffect, useState, useRef } from "react";
import { EditorState, convertToRaw, convertFromRaw, ContentState, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "./style/createThread.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CloseIcon from "./close.svg";
import axios from "axios";
import Loader from "../Login/loader.gif";
import { connect } from "react-redux";

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

class TextEditor extends Component {
    constructor(props) {
        super(props);

        let editorState = EditorState.createEmpty();

        this.state = {
            title: "",

            editorState,
            img: null,
            file: null,
            category: "default",
            loading: false,
        };

        this.handleChangeImg = this.handleChangeImg.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({ ...this.state, [name]: value });
    }

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

        this.setState({
            loading: true,
        });

        const testing = new FormData();
        testing.append("title", this.state.title);
        testing.append("content", this.state.editorState);
        testing.append("image", this.state.img);
        testing.append("category", this.state.category);

        axios({
            method: "POST",
            url: `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/create`,
            data: testing,
            headers: {
                Authorization: `Bearer ${Token} `,
            },
        })
            .then((res) => {
                console.log(res, "create thread");
                this.setState({
                    loading: false,
                });
                window.location.reload();
            })
            .catch((err) => {
                alert("error create thread");
            });
    };

    render() {
        const { editorState } = this.state;

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
                            placeholder=""
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
                        defaultEditorState={this.state.editorState}
                        // editorState={this.state.editorState}
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
                                <option value="6177f8721ffa070699dd876e">Travel</option>
                                <option value="6166eed998472010a2d7e980">Game</option>
                                <option value="6166eef398472010a2d7e986">DIY</option>
                                <option value="6166ef8c98472010a2d7e988">Electronics</option>
                                <option value="6166eeed98472010a2d7e984">Arts</option>
                                <option value="6166eee898472010a2d7e982">Sport</option>
                                <option value="6166eed398472010a2d7e97e">Music</option>
                                <option value="6166effb98472010a2d7e98c">Business</option>
                                <option value="6172d7ef0f79346bbb9db5ca">Cooking</option>
                            </select>
                        </div>

                        <div className="createThread-PostButton">
                            {this.state.loading === true ? (
                                <img src={Loader} alt="loader" />
                            ) : (
                                <button>Post</button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextEditor;
