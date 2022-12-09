
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import upVote from "../assets/—Pngtree—vector like icon_4013753.png"

export const Comments = ({article_id}) => {
    const [commentData, setCommentsData] = useState([])
    useEffect(()=>{
        axios.get(`https://fair-teal-shark-cape.cyclic.app/api/articles/${article_id}/comments`)
        .then(commentsData=>{
            setCommentsData(commentsData.data.comments)
        })
    },[])
  return (
    <div className='c1-container'>
        <ul className="users">
      {commentData.map((element,index) => {
          return (
              <div className='news-data' key={element.article_id}>
            <li key={element.article_id}>
                <div className='content-section'>
                    <h2>{element.author}</h2>
                    <br/>
                    <p>{element.body}</p>
                    <br/>
                    <span>Create at: {element.created_at}</span>
                    <br/>
                    <button><img src={upVote}/> <br/>{element.votes}</button>
                    <br/>
                </div>
            </li>
            <hr/>
          </div>
        );
        })}
    </ul>
        </div>
  )
}
