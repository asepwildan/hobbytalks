import React, { useState, useEffect } from "react";
import "./style/category.scss";
import Navbar from "../../component/Navbar/navbar";
import Music from "./img/music.jpg";
import Game from "./img/game.jpg";
import Sport from "./img/sport.jpg";
import Travel from "./img/travel.jpg";
import Arts from "./img/arts.jpg";
import Diy from "./img/diy.jpg";
import Tech from "./img/tech.jpg";
import Category8 from "./img/category8.jpg";
import Category9 from "./img/category9.jpg";
import axios from "axios";
import Loading from "./img/spinnerdelete.svg";
import { useSelector, useDispatch } from "react-redux";
// testing github
export default function Category() {
    let [category, setCategory] = useState([
        {
            img: Music,
            value: "6166eed398472010a2d7e97e",
            title: "Music",
            isCheck: false,
            id: "1a",
        },
        {
            img: Game,
            value: "6166eed998472010a2d7e980",
            title: "Games",
            isCheck: false,
            id: "2a",
        },
        ,
        {
            img: Sport,
            value: "6166eee898472010a2d7e982",
            title: "Sports",
            isCheck: false,
            id: "3a",
        },
        {
            img: Travel,
            value: "6177f8721ffa070699dd876e",
            title: "Travel",
            isCheck: false,
            id: "4a",
        },
        {
            img: Arts,
            value: "6166eeed98472010a2d7e984",
            title: "Arts",
            isCheck: false,
            id: "5a",
        },
        {
            img: Diy,
            value: "6166eef398472010a2d7e986",
            title: "DIY",
            isCheck: false,
            id: "6a",
        },
        {
            img: Tech,
            value: "6166ef8c98472010a2d7e988",
            title: "Tech",
            isCheck: false,
            id: "7a",
        },
        {
            img: Category8,
            value: "6166effb98472010a2d7e98c",
            title: "Business",
            isCheck: false,
            id: "8a",
        },
        {
            img: Category9,
            value: "6172d7ef0f79346bbb9db5ca",
            title: "Foods",
            isCheck: false,
            id: "9a",
        },
    ]);

    const [cek, setCek] = useState([]);
    const [loading, setLoading] = useState(false);
    const { profileInfo } = useSelector((state) => state.getProfileReducer);
    var abc = [];

    const handleChange = (id) => {
        // let input = e.target.checked;
        const temporary = category.map((value) => {
            return value.id === id ? { ...value, isCheck: !value.isCheck } : value;
        });

        setCategory(temporary);
    };

    console.log(cek, "cek nih");
    let Token = localStorage.getItem("tokenLogin");

    const handleSubmit = (e) => {
        e.preventDefault();
        let filtered = category.filter((row) => row.isCheck === true);
        console.log(filtered, "filter");

        var newArray = [];
        filtered.forEach((singleElement) => {
            newArray.push(singleElement.value);
        });

        console.log(newArray);
        setLoading(true);
        axios
            .put(
                "https://hobbytalk-be-glints.herokuapp.com/api/v1/users/likecategories",
                {
                    categoryId: newArray,
                },
                {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                    },
                }
            )

            .then((Response) => {
                console.log(Response, "categori");
                window.location = "/forum";
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data.message, "wah ini eror login");
                setLoading(false);
            });
    };
    return (
        <React.Fragment>
            <Navbar />
            <div className="categoryContainer">
                <form onSubmit={handleSubmit}>
                    <div className="box-category-container">
                        <div className="categoryIntro">
                            What do you want to like {profileInfo.name}..
                        </div>
                        {category.map((category) => (
                            <div className="boxCategory">
                                <img
                                    className={category.isCheck ? "gakBurem" : "burem"}
                                    src={category.img}
                                    alt="category img"
                                />
                                <p>{category.title}</p>
                                <input
                                    onChange={() => handleChange(category.id)}
                                    className="inputCek"
                                    type="checkbox"
                                    name="category"
                                    value={category.value}
                                />
                            </div>
                        ))}
                    </div>
                    {loading === true ? (
                        <div className="buttonCategoryContainer">
                            <img src={Loading} />
                        </div>
                    ) : (
                        <div className="buttonCategoryContainer">
                            <button className="buttonCategory">Submit your topic</button>
                        </div>
                    )}
                    {/* <div className="buttonCategoryContainer">
                        <button className="buttonCategory">Kirim Topic ke Forum saya</button>
                    </div> */}
                </form>
            </div>
        </React.Fragment>
    );
}
