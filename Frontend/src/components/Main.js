import React from 'react';
import Card from './Card';
import './Main.css';
import { Link } from 'react-router-dom';

function Main({ articles }) {


  function convertToSlug(Text) {
    return Text.toLowerCase()
               .replace(/ /g, '-')
               .replace(/[^\w-]+/g, '');
  }



  // let chunks = [];
  // for (let i = 0; i < articles.length; i += 3) {
  //   chunks.push(articles.slice(i, i + 3));
  // }

  return (
    <div className='main-item'>
  
      {/* chunks.map((articleChunk, index)=>  { */}
        
       {/* // return ( */}
            
      {articles.map((article)=>  {
        let slug = convertToSlug(article.title)
        return (
          <div className='main-item1'>
            <Link to={`/news-updates/${slug}`}>
            <Card  articles={article} />
            </Link>
            </div>  
          )
      })}
    
     
     
    
    </div>
  )
}


export default Main