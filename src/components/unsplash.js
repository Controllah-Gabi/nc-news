import React from "react";
import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xlLdFP_MhrG4gzSUd2zbADPlmR9f8AJnt-21xEd7Fzk'
    }
})