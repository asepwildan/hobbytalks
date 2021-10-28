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

class TextEditor extends Component {
    constructor(props) {
        super(props);

        // this.buttonRef = React.createRef();
        //     const contentState = convertFromRaw(content);
        // console.log(props.threads.getProfileReducer.threadListProfile, "testing");

        // const abcd = props.abcd.getProfileReducer.abcd;
        let editorState = EditorState.createEmpty();

        const indexThread = props?.indexThread;
        console.log(indexThread, "index thread create");
        const bahaya = props?.threadListProfile ? props?.threadListProfile[indexThread] : "";
        const idThread = props?.threadListProfile ? props?.threadListProfile[indexThread]._id : "";
        console.log(idThread, "id");
        // console.log(props.indexThread, "indexThread");
        // console.log(props, "ini props");
        // const thread = props.threads[0].content;
        // if (indexThread !== null) {
        // const indexThread = props.indexThread;

        // if (indexThread !== null) {
        //     return (editorState = EditorState.createWithContent(
        //         ContentState.createFromBlockArray(
        //             convertFromHTML(
        //                 props.threads.getProfileReducer.threadListProfile[indexThread].content
        //             )
        //         )
        //     ));
        // }

        // this.state = {
        //     title: "",
        //     editorState,
        //     img: null,
        //     file: null,
        //     category: "default",
        //     loading: false,
        //     // konten: abcd,
        // };
        // } else {
        this.state = {
            title: "",
            editorState: EditorState.createWithContent(
                ContentState.createFromBlockArray(convertFromHTML(bahaya?.content || " "))
            ),
            // editorState:
            //     props.threads.getProfileReducer.threadListProfile.length !== null
            //         ? EditorState.createFromBlockArray(
            //               ContentState.createFromBlockArray(convertFromHTML(bahaya.content))
            //           )
            //         : null,
            // editorState:
            //     props.threads.getProfileReducer.threadListProfile.length !== null
            //         ? EditorState.createWithContent("<p>testing</p>")
            //         : null,
            // editorState,
            img: null,
            file: null,
            category: "default",
            loading: false,
            id: idThread,
            // nilai: indexThread,
        };
        // }
        // if (abcd !== null) {
        //     editorState = EditorState.createWithContent(
        //         ContentState.createFromBlockArray(convertFromHTML(abcd))
        //     );
        // }
        // console.log(abcd);

        this.handleChangeImg = this.handleChangeImg.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }
    // componentDidMount() {
    //     this.setState({
    //         editorState: EditorState.createWithContent(
    //             this.props.threads.getProfileReducer.threadListProfile[1].content
    //         ),
    //     });
    // }

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
        console.log(this.state.loading, "loading");
        this.setState({
            loading: true,
        });
        console.log(this.state.loading, "loading");
        const testing = new FormData();
        testing.append("title", this.state.title);
        testing.append("content", this.state.editorState);
        testing.append("image", this.state.img);
        testing.append("category", this.state.category);

        axios({
            method: "PUT",
            url: `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/edit/${this.state.id}`,
            data: testing,
            headers: {
                Authorization: `Bearer ${Token} `,
            },
        })
            .then((res) => {
                console.log(res, "ini create thread");
                this.setState({
                    loading: false,
                });
                window.location.reload();
            })
            .catch((err) => {
                console.log(err.data, "error create thread");
                alert("error create thread");
            });
    };

    render() {
        // console.log(this.state, "hasil");
        const { editorState } = this.state;
        // console.log(this.state.konten, "abcd");
        // console.log(this.state.nilai, "abcd2");

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
                            // {
                            //     this.state.konten.getProfileReducer.threadListProfile[0].content
                            // }
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

                {/* <textarea
                    disabled
                    value={draftToHtml(convertToRaw(contentState.getCurrentContent()))}
                /> */}
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     threads: state,
//     indexThread: state.getProfileReducer.indexThreadUser,
// });

export default TextEditor;
