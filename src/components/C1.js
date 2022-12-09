import axios from 'axios'
import React, { useEffect, useState } from 'react'
import unsplash from './unsplash'
import upVote from "../assets/—Pngtree—vector like icon_4013753.png"
import { Link } from 'react-router-dom'

export const C1 = () => {
    const [sportsData,setsportsData]=useState([])
    const [imageData, setimageData]= useState([])
    useEffect(()=>{
        axios.get("https://fair-teal-shark-cape.cyclic.app/api/topics/football")
        .then(articles=>{
            setsportsData(articles.data.articles)
        })

        unsplash.get('/search/photos?query=sports')
        .then(images=>{
            setimageData(images.data.results)
        })
            
    


    },[])
    let count =0;
  return (
      <div className='c1-container'>
        <ul className="users">
      {sportsData.map((element,index) => {
          if(count<9){
              count ++ 
            }
          return (
              <div className='news-data' key={element.article_id}>
            <li key={element.article_id}>
                <div className='content-section'>
                    <h2><Link to={`/article/${element.article_id}`}>{element.title}</Link></h2>
                    <br/>
                    <p>{element.body}</p>
                    <br/>
                    <span>Author: {element.author}</span>
                    <br/>
                    <span>Create at: {element.created_at}</span>
                    <br/>
                    <button><img src={upVote}/> <br/>{element.votes}</button>
                    <br/>
                </div>
              <div className='img-section'>
              <span>{element.topic}</span>
              <Link to={`/article/${element.article_id}`}><img
                src={imageData[count].urls.thumb}
                alt="hiya"
              /></Link>
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
