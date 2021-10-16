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

export default function Category() {
    let [category, setCategory] = useState([
        {
            img: Category1,
            value: "Music",
        },
        {
            img: Category2,
            value: "Games",
        },
        ,
        {
            img: Category3,
            value: "Sports",
        },
        {
            img: Category4,
            value: "Travel",
        },
        {
            img: Category5,
            value: "Arts",
        },
        {
            img: Category6,
            value: "DIY",
        },
        {
            img: Category7,
            value: "Electronics",
        },
        {
            img: Category8,
            value: "Business",
        },
        {
            img: Category9,
            value: "Cooking",
        },
    ]);

    const [cek, setCek] = useState([]);
    var abc = [];
    const handleChange = (e) => {
        let input = e.target.checked;
        if (input) {
            setCek([...cek, e.target.value]);
        } else if (input === false) {
            abc = cek;
            var index = abc.indexOf(e.target.value);
            if (index > -1) {
                abc.splice(index, 1);
            }
            setCek(abc);
        }
        if (cek.indexOf(e.target.value) !== -1) {
            console.log("Value exists!");
        } else {
            console.log("Value does not exists!");
        }
        console.log(cek.indexOf(e.target.value) > -1, "bangke"); //true
    };

    console.log(cek, "cek nih");

    console.log(cek.indexOf("Music") > -1, "bangke"); //true

    return (
        <React.Fragment>
            <Navbar />
            <div className="categoryContainer">
                <form action="">
                    <div className="box-category-container">
                        <div className="categoryIntro">Find your</div>
                        {category.map((category) => (
                            <div className="boxCategory">
                                <img
                                    className={
                                        cek.indexOf(category.value) > -1 === true
                                            ? "gakBurem"
                                            : "burem"
                                    }
                                    src={category.img}
                                    alt="category img"
                                />
                                <p>{category.value}</p>
                                <input
                                    onChange={handleChange}
                                    className="inputCek"
                                    type="checkbox"
                                    name="category"
                                    value={category.value}
                                />
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
