import React, { useState, useEffect } from "react";
import "./Trending.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Trending() {
  const [trending, setTrending] = useState([]);
  const [idThread, setIdThread] = useState("");
  useEffect(() => {
    axios
      .get("https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/trending")
      .then((response) => {
        console.log(response.data.data, "trending");
        setTrending(response.data.data);
        setIdThread(response.data.data._id);
        console.log(response.data._id, "id thread trending");
      });
  }, []);
  console.log(idThread, "id thread trending");
  console.log(trending, "isi trending ni");
  return (
    // tes pull request
    <div className="trendingContainer">
      <div className="trending">
        <p>Trending</p>
      </div>
      {trending.map((trending) => (
        <div className="trendingListContainer">
          <div className="trendingList">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3896 10.36L12.3896 4.24C12.2296 4.08 12.0296 4 11.8096 4C11.5896 4 11.3896 4.08 11.2296 4.24L5.22965 10.36C5.00965 10.58 4.92965 10.98 5.06965 11.26C5.18965 11.56 5.48965 11.78 5.80965 11.78H8.40965V19.18C8.40965 19.62 8.86965 19.98 9.30965 19.98H14.3096C14.7496 19.98 15.2096 19.62 15.2096 19.18V11.78H17.8096C18.1296 11.78 18.4296 11.54 18.5496 11.26C18.6696 10.98 18.6096 10.6 18.3896 10.36ZM14.3096 10.2C13.8696 10.2 13.6096 10.48 13.6096 10.92V18.4H10.0096V10.92C10.0096 10.48 9.74965 10.2 9.30965 10.2H7.70965L11.8096 6.02L15.9096 10.2H14.3096Z"
                fill="#1E8AC6"
              />
              <path
                d="M12 5.5L7 10.5H9.8697V18.6044H14V10.5H16.5L12 5.5Z"
                fill="#1E8AC6"
              />
            </svg>

            <div className="trendingVoteInfo">{trending.likeCount}</div>
          </div>
          <Link
            to={`/thread-detail/?xyz=${trending._id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="trendingTitle">
              <p className="trendingTitleInfo">{trending.title}</p>
            </div>
          </Link>
        </div>
      ))}
      {/*             
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
            </div> */}
    </div>
  );
}
