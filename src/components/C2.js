import axios from 'axios'
import React, { useEffect, useState } from 'react'
import unsplash from './unsplash'
import upVote from "../assets/—Pngtree—vector like icon_4013753.png"

export const C2 = () => {
    const [codingData,setcodingData]=useState([])
    const [imagecodeData, setimagecodeData]= useState([])
    useEffect(()=>{
        axios.get("https://fair-teal-shark-cape.cyclic.app/api/topics/coding")
        .then(articles=>{
            setcodingData(articles.data.articles)
        })

        unsplash.get('/search/photos?query=coding')
        .then(images=>{
            setimagecodeData(images.data.results)
        })
            
    


    },[])
    let count =0;
  return (
    <div className='c1-container'>
        <ul className="users">
      {codingData.map((element,index) => {
          if(count<9){
              count ++ 
          }
        return (
          <div className='news-data'>
            <li key={element.article_id}>
                <div className='content-section'>
                    <h2>{element.title}</h2>
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
              <img
                src={imagecodeData[count].urls.thumb}
                alt="hiya"
              />
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


