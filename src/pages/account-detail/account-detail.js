import React from "react";
import Thread from "../../component/thread-profile/thread-profile";
import Likerecomendation from "../../component/like-recomendation/like-recomendation";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import Banner from "../../component/banner-profile/Banner";
import Trending from "../../component/trending/Trending";
import "./style/Account-detail.scss";
import ThreadUser from "../../component/thread-detail-user/Thread-detail-user";

export default function AccountDetail() {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <Banner />
                <div className="boxContentProfile">
                    <div className="threadContanerProfile">
                        <ThreadUser/>
                    </div>
                    <div className="likeRekomContanerProfile">
                        <Likerecomendation />
                        <div className="trendingContanerProfile">
                            <Trending />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
