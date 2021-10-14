// import React from "react";
// import garis from '../../component/assets/logo/garis.svg';
// import arrow from '../assets/logo/arrow.svg'
// import './Trending.scss'

// export default function Trending() {
//     return(
//     <div className="trending">
//         <p className="text">Trending</p>
//         <img className="garis" src={ garis }></img>
//         <div className="panah">
//             <img className="arrow" src={ arrow }></img>
//             <p className="value">1.5k</p>
//         </div>
//         <p className="text2">My Journey into Piano: 1 year and still counting</p>
//         <img className="garis2" src={ garis }></img>
//         <div className="panah2">
//             <img className="arrow" src={ arrow }></img>
//             <p className="value">1.2k</p>
//         </div>
//         <p className="text3">Easy DIY Crafts Anyone Can Do at Home</p>
//         <img className="garis3" src={ garis }></img>
//         <div className="panah3">
//             <img className="arrow" src={ arrow }></img>
//             <p className="value">899</p>
//         </div>
//         <p className="text4">Ultrices adipiscing malesuada amet elementum a, mattis purus eget volutpat.</p>
//         <img className="garis4" src={ garis }></img>
//         <div className="panah4">
//             <img className="arrow" src={ arrow }></img>
//             <p className="value">564</p>
//         </div>
//         <p className="text5">Pulvinar aenean adipiscing cursus sollicitudin ac.</p>
//         <img className="garis5" src={ garis }></img>
//         <div className="panah5">
//             <img className="arrow" src={ arrow }></img>
//             <p className="value">455</p>
//         </div>
//         <p className="text6">Odio sed phasellus facilisis eros diam enim accumsan nec.</p>
//         <img className="garis6" src={ garis }></img>
//         <div className="panah6">
//             <img className="arrow" src={ arrow }></img>
//             <p className="value">234</p>
//         </div>
//         <p className="text7">Diam quam dolor, proin tempor in suspendisse ac faucibus pellentesque.</p>
//         <img className="garis7" src={ garis }></img>
//         <div className="panah7">
//             <img className="arrow" src={ arrow }></img>
//             <p className="value">123</p>
//         </div>
//         <p className="text8">Mi gravida quisque suspendisse ut mi elit sed.</p>
//     </div>
//     )
// }

import React from "react";
import "./Trending.scss";

export default function Trending() {
    return (
        // tes pull request
        <div className="trendingContainer">
            <div className="trending">
                <p>Trending</p>
            </div>
            <div className="trendingListContainer">
                <div className="trendingList">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3896 10.36L12.3896 4.24C12.2296 4.08 12.0296 4 11.8096 4C11.5896 4 11.3896 4.08 11.2296 4.24L5.22965 10.36C5.00965 10.58 4.92965 10.98 5.06965 11.26C5.18965 11.56 5.48965 11.78 5.80965 11.78H8.40965V19.18C8.40965 19.62 8.86965 19.98 9.30965 19.98H14.3096C14.7496 19.98 15.2096 19.62 15.2096 19.18V11.78H17.8096C18.1296 11.78 18.4296 11.54 18.5496 11.26C18.6696 10.98 18.6096 10.6 18.3896 10.36ZM14.3096 10.2C13.8696 10.2 13.6096 10.48 13.6096 10.92V18.4H10.0096V10.92C10.0096 10.48 9.74965 10.2 9.30965 10.2H7.70965L11.8096 6.02L15.9096 10.2H14.3096Z"
                            fill="#1E8AC6"
                        />
                        <path
                            d="M12 5.5L7 10.5H9.8697V18.6044H14V10.5H16.5L12 5.5Z"
                            fill="#1E8AC6"
                        />
                    </svg>

                    <div className="trendingVoteInfo">1.5k</div>
                </div>
                <div className="trendingTitle">
                    <p className="trendingTitleInfo">
                        My Journey into Piano: 1 year and still counting
                    </p>
                </div>
            </div>
            <div className="trendingListContainer">
                <div className="trendingList">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3896 10.36L12.3896 4.24C12.2296 4.08 12.0296 4 11.8096 4C11.5896 4 11.3896 4.08 11.2296 4.24L5.22965 10.36C5.00965 10.58 4.92965 10.98 5.06965 11.26C5.18965 11.56 5.48965 11.78 5.80965 11.78H8.40965V19.18C8.40965 19.62 8.86965 19.98 9.30965 19.98H14.3096C14.7496 19.98 15.2096 19.62 15.2096 19.18V11.78H17.8096C18.1296 11.78 18.4296 11.54 18.5496 11.26C18.6696 10.98 18.6096 10.6 18.3896 10.36ZM14.3096 10.2C13.8696 10.2 13.6096 10.48 13.6096 10.92V18.4H10.0096V10.92C10.0096 10.48 9.74965 10.2 9.30965 10.2H7.70965L11.8096 6.02L15.9096 10.2H14.3096Z"
                            fill="#1E8AC6"
                        />
                        <path
                            d="M12 5.5L7 10.5H9.8697V18.6044H14V10.5H16.5L12 5.5Z"
                            fill="#1E8AC6"
                        />
                    </svg>

                    <div className="trendingVoteInfo">1.2k</div>
                </div>
                <div className="trendingTitle">
                    <p className="trendingTitleInfo">Easy DIY Crafts Anyone Can Do at Home</p>
                </div>
            </div>
            <div className="trendingListContainer">
                <div className="trendingList">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3896 10.36L12.3896 4.24C12.2296 4.08 12.0296 4 11.8096 4C11.5896 4 11.3896 4.08 11.2296 4.24L5.22965 10.36C5.00965 10.58 4.92965 10.98 5.06965 11.26C5.18965 11.56 5.48965 11.78 5.80965 11.78H8.40965V19.18C8.40965 19.62 8.86965 19.98 9.30965 19.98H14.3096C14.7496 19.98 15.2096 19.62 15.2096 19.18V11.78H17.8096C18.1296 11.78 18.4296 11.54 18.5496 11.26C18.6696 10.98 18.6096 10.6 18.3896 10.36ZM14.3096 10.2C13.8696 10.2 13.6096 10.48 13.6096 10.92V18.4H10.0096V10.92C10.0096 10.48 9.74965 10.2 9.30965 10.2H7.70965L11.8096 6.02L15.9096 10.2H14.3096Z"
                            fill="#1E8AC6"
                        />
                        <path
                            d="M12 5.5L7 10.5H9.8697V18.6044H14V10.5H16.5L12 5.5Z"
                            fill="#1E8AC6"
                        />
                    </svg>

                    <div className="trendingVoteInfo">899</div>
                </div>
                <div className="trendingTitle">
                    <p className="trendingTitleInfo">
                        Ultrices adipiscing malesuada amet elementum a, mattis purus eget volutpat.
                    </p>
                </div>
            </div>
            <div className="trendingListContainer">
                <div className="trendingList">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3896 10.36L12.3896 4.24C12.2296 4.08 12.0296 4 11.8096 4C11.5896 4 11.3896 4.08 11.2296 4.24L5.22965 10.36C5.00965 10.58 4.92965 10.98 5.06965 11.26C5.18965 11.56 5.48965 11.78 5.80965 11.78H8.40965V19.18C8.40965 19.62 8.86965 19.98 9.30965 19.98H14.3096C14.7496 19.98 15.2096 19.62 15.2096 19.18V11.78H17.8096C18.1296 11.78 18.4296 11.54 18.5496 11.26C18.6696 10.98 18.6096 10.6 18.3896 10.36ZM14.3096 10.2C13.8696 10.2 13.6096 10.48 13.6096 10.92V18.4H10.0096V10.92C10.0096 10.48 9.74965 10.2 9.30965 10.2H7.70965L11.8096 6.02L15.9096 10.2H14.3096Z"
                            fill="#1E8AC6"
                        />
                        <path
                            d="M12 5.5L7 10.5H9.8697V18.6044H14V10.5H16.5L12 5.5Z"
                            fill="#1E8AC6"
                        />
                    </svg>

                    <div className="trendingVoteInfo">564</div>
                </div>
                <div className="trendingTitle">
                    <p className="trendingTitleInfo">
                        Pulvinar aenean adipiscing cursus sollicitudin ac.
                    </p>
                </div>
            </div>
            <div className="trendingListContainer">
                <div className="trendingList">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3896 10.36L12.3896 4.24C12.2296 4.08 12.0296 4 11.8096 4C11.5896 4 11.3896 4.08 11.2296 4.24L5.22965 10.36C5.00965 10.58 4.92965 10.98 5.06965 11.26C5.18965 11.56 5.48965 11.78 5.80965 11.78H8.40965V19.18C8.40965 19.62 8.86965 19.98 9.30965 19.98H14.3096C14.7496 19.98 15.2096 19.62 15.2096 19.18V11.78H17.8096C18.1296 11.78 18.4296 11.54 18.5496 11.26C18.6696 10.98 18.6096 10.6 18.3896 10.36ZM14.3096 10.2C13.8696 10.2 13.6096 10.48 13.6096 10.92V18.4H10.0096V10.92C10.0096 10.48 9.74965 10.2 9.30965 10.2H7.70965L11.8096 6.02L15.9096 10.2H14.3096Z"
                            fill="#1E8AC6"
                        />
                        <path
                            d="M12 5.5L7 10.5H9.8697V18.6044H14V10.5H16.5L12 5.5Z"
                            fill="#1E8AC6"
                        />
                    </svg>

                    <div className="trendingVoteInfo">455</div>
                </div>
                <div className="trendingTitle">
                    <p className="trendingTitleInfo">
                        Odio sed phasellus facilisis eros diam enim accumsan nec.
                    </p>
                </div>
            </div>
            <div className="trendingListContainer">
                <div className="trendingList">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3896 10.36L12.3896 4.24C12.2296 4.08 12.0296 4 11.8096 4C11.5896 4 11.3896 4.08 11.2296 4.24L5.22965 10.36C5.00965 10.58 4.92965 10.98 5.06965 11.26C5.18965 11.56 5.48965 11.78 5.80965 11.78H8.40965V19.18C8.40965 19.62 8.86965 19.98 9.30965 19.98H14.3096C14.7496 19.98 15.2096 19.62 15.2096 19.18V11.78H17.8096C18.1296 11.78 18.4296 11.54 18.5496 11.26C18.6696 10.98 18.6096 10.6 18.3896 10.36ZM14.3096 10.2C13.8696 10.2 13.6096 10.48 13.6096 10.92V18.4H10.0096V10.92C10.0096 10.48 9.74965 10.2 9.30965 10.2H7.70965L11.8096 6.02L15.9096 10.2H14.3096Z"
                            fill="#1E8AC6"
                        />
                        <path
                            d="M12 5.5L7 10.5H9.8697V18.6044H14V10.5H16.5L12 5.5Z"
                            fill="#1E8AC6"
                        />
                    </svg>

                    <div className="trendingVoteInfo">234</div>
                </div>
                <div className="trendingTitle">
                    <p className="trendingTitleInfo">
                        Diam quam dolor, proin tempor in suspendisse ac faucibus pellentesque.
                    </p>
                </div>
            </div>
            <div className="trendingListContainer">
                <div className="trendingList">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3896 10.36L12.3896 4.24C12.2296 4.08 12.0296 4 11.8096 4C11.5896 4 11.3896 4.08 11.2296 4.24L5.22965 10.36C5.00965 10.58 4.92965 10.98 5.06965 11.26C5.18965 11.56 5.48965 11.78 5.80965 11.78H8.40965V19.18C8.40965 19.62 8.86965 19.98 9.30965 19.98H14.3096C14.7496 19.98 15.2096 19.62 15.2096 19.18V11.78H17.8096C18.1296 11.78 18.4296 11.54 18.5496 11.26C18.6696 10.98 18.6096 10.6 18.3896 10.36ZM14.3096 10.2C13.8696 10.2 13.6096 10.48 13.6096 10.92V18.4H10.0096V10.92C10.0096 10.48 9.74965 10.2 9.30965 10.2H7.70965L11.8096 6.02L15.9096 10.2H14.3096Z"
                            fill="#1E8AC6"
                        />
                        <path
                            d="M12 5.5L7 10.5H9.8697V18.6044H14V10.5H16.5L12 5.5Z"
                            fill="#1E8AC6"
                        />
                    </svg>

                    <div className="trendingVoteInfo">123</div>
                </div>
                <div className="trendingTitle">
                    <p className="trendingTitleInfo">
                        Mi gravida quisque suspendisse ut mi elit sed.
                    </p>
                </div>
            </div>
        </div>
    );
}
