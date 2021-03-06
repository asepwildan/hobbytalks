import React from "react";
import Thread from "../../component/thread-profile/thread-profile";
import Likerecomendation from "../../component/like-recomendation/like-recomendation";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/Navbar/navbar";
import Banner from "../../component/banner-profile/Banner";
import Trending from "../../component/trending/Trending";
import "./style/Account-detail.scss";
import ThreadListAccountDetail from "../../component/threadListAccountDetail/threadListAccountDetail";
import BannerUser from "../../component/bannerUser/BannerUser";

export default function AccountDetail() {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <BannerUser />
                <div className="boxContentProfile">
                    <div className="threadContanerProfile">
                        <ThreadListAccountDetail />
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
