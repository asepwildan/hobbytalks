import axios from "axios";
let Token = localStorage.getItem("tokenLogin");

export const getProfileInfo = (page) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/users/profile/me?page=${page}`,
        {
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        }
    );
};

//--------Service-Comment-------//
export const commentList = (id, page, limit) => {
    console.log(id, "komen servce");
    if (page === undefined || limit === undefined) {
        page = 1;
        limit = 5;
    }
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/comments/${id}?page=${page}&limit=${limit}`
    );
};

//-----Service-get Thread List -------//
export const getThreadList = (shorting, page) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/${shorting}?page=${page}`
    );
};
//--------Service-get Thread-------//
export const getThreadDetail = (idThread) => {
    return axios.get(`https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/get/${idThread}`);
};

//-----Service-get User------//
export const getUser = (id, page) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1//users/user/${id}?page=${page}`
    );
};

//--- Service-get-categoryList------//
export const getThreadCategory = (category, catPage) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/threadscategory/${category}?page=${catPage}`
    );
};

//---Service-get-Following-thread----////
export const getFollowingThread = (isPage) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/follow?page=${isPage}`,
        {
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        }
    );
};

//---Service-get-Seacrh-thread----////
export const getSearchThread = (searchValue) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/search/${searchValue}`
    );
};

// export const deleteThread = (id) => {
//     return axios.delete(
//         `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/follow?page=${page}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${Token}`,
//             },
//         }
//     );
// };
