import axios from 'axios'
import React from 'react'


export const IncrementVote = (article_id) => {
    const patchVote ={inc_votes: 1}
  return axios.patch(`https://fair-teal-shark-cape.cyclic.app/api/articles/${article_id}`,patchVote)
  .then((body)=>{
    // setVotes(body.data.articles.votes)
    return body;
  })  
}
