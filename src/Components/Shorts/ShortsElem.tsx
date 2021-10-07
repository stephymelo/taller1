import * as React from 'react';
import './ShortsElem.css';

export interface ShortsElemProps {
  title: string;
  genre:string;
  year: string;
  rating:string;
  coverimg:string;
  description: string;

}

const ShortsElem: React.FC<ShortsElemProps> = ({ title,year,genre,coverimg,rating,description}) => {





  return(<article className="ShortfilmsPage">
  <section className="profileBanner" ></section>
 <div>
    <img src={`${process.env.PUBLIC_URL}${coverimg}`}  alt="profile"/>
  </div>
  <div>
  <h2>{title}</h2>
  <h3>{year}</h3>
  <p>{genre}</p>
  <p>{description}</p>

  </div>
  
  



</article>) ;
}

export default ShortsElem;