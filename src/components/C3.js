import axios from 'axios'
import React, { useEffect, useState } from 'react'
import unsplash from './unsplash'
import upVote from "../assets/—Pngtree—vector like icon_4013753.png"

export const C3 = () => {
    const [cookingData,setcookingData]=useState([])
    const [imagecookingData, setimagecookingData]= useState([])
    useEffect(()=>{
        axios.get("https://fair-teal-shark-cape.cyclic.app/api/topics/cooking")
        .then(articles=>{
            setcookingData(articles.data.articles)
        })

        unsplash.get('/search/photos?query=cooking')
        .then(images=>{
            setimagecookingData(images.data.results)
        })
            
    


    },[])
    let count =0;
  return (
    <div className='c3-container'>
        <ul className="users">
      {cookingData.map((element,index) => {
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
                </div>
                <br/>
              <div className='img-section'>
                <br/>
              <span>{element.topic}</span>
              <img
                src={imagecookingData[count].urls.small}
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


