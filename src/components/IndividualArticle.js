import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import unsplash from './unsplash'
import upVote from "../assets/—Pngtree—vector like icon_4013753.png"
import { Comments } from './comments'
import { IncrementVote } from './IncrementVote'


export const IndividualArticle = () => {
    const [articleData,setarticleData] = useState({})
    const [articleImage,setarticleImage] = useState([])
    const [comments, setComments] = useState(false)
    const [votes, setVotes] = useState(0)
    const {article_id}=useParams()
    useEffect(()=>{
        axios.get(`https://fair-teal-shark-cape.cyclic.app/api/articles/${article_id}`)
        .then(articles=>{
            setarticleData(articles.data.article[0])
            setVotes(articles.data.article[0].votes)
        })
        
    },[])
  return (
    <div className='news-data' key={articleData.article_id}>
            <section key={articleData.article_id}>
                <div className='content-section'>
                    <h2>{articleData.title}</h2>
                    <br/>
                    <p>{articleData.body}</p>
                    <br/>
                    <span>Author: {articleData.author}</span>
                    <br/>
                    <span>Create at: {articleData.created_at}</span>
                    <br/>
                    <button onClick={()=>{
                        IncrementVote(article_id)
                        setVotes(votes +1)
                    }}><img src={upVote}/> <br/>{votes}</button>
                    <br/>
                </div>
              <div className='img-section'>
              <span>{articleData.topic}</span>
              {/* <img
                src={articleImage[0].urls.small}
                alt="hiya"
              /> */}
              </div>
            </section>
            <hr/>
              <div className='comment-section'>
                <button onClick={()=>{
                    setComments(true)
                }}>Comments</button>
                {comments===true?<Comments article_id={article_id}/>:""}
              </div>
          </div>
  )
}
