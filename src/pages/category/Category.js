import React, { useState, useEffect } from "react";
import "./style/category.scss";
import Navbar from "../../component/Navbar/navbar";
import Category1 from "./img/category1.png";
import Category2 from "./img/category2.png";
import Category3 from "./img/category3.png";
import Category4 from "./img/category4.png";
import Category5 from "./img/category5.png";
import Category6 from "./img/category6.png";
import Category7 from "./img/category7.png";
import Category8 from "./img/category8.jpg";
import Category9 from "./img/category9.jpg";
import axios from "axios";
// testing github
export default function Category() {
    let [category, setCategory] = useState([
        {
            img: Category1,
            value: "6166eed398472010a2d7e97e",
            title: "Music",
            isCheck: false,
            id: "1a",
        },
        {
            img: Category2,
            value: "6166eed998472010a2d7e980",
            title: "Games",
            isCheck: false,
            id: "2a",
        },
        ,
        {
            img: Category3,
            value: "6166eee898472010a2d7e982",
            title: "Sports",
            isCheck: false,
            id: "3a",
        },
        {
            img: Category4,
            value: "6166eec398472010a2d7e97c",
            title: "Travel",
            isCheck: false,
            id: "4a",
        },
        {
            img: Category5,
            value: "6166eeed98472010a2d7e984",
            title: "Arts",
            isCheck: false,
            id: "5a",
        },
        {
            img: Category6,
            value: "6166eef398472010a2d7e986",
            title: "DIY",
            isCheck: false,
            id: "6a",
        },
        {
            img: Category7,
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
            value: "6166f00d98472010a2d7e98e",
            title: "Cooking",
            isCheck: false,
            id: "9a",
        },
    ]);

    const [cek, setCek] = useState([]);
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
                window.location = "/profile";
            })
            .catch((error) => {
                console.log(error.response.data.message, "wah ini eror login");
            });
    };
    return (
        <React.Fragment>
            <Navbar />
            <div className="categoryContainer">
                <form onSubmit={handleSubmit}>
                    <div className="box-category-container">
                        <div className="categoryIntro">Find your</div>
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
                    <div className="buttonCategoryContainer">
                        <button className="buttonCategory">Kirim Topic ke Forum saya</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
