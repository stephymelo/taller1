import * as React from 'react';
import './ShortsElem.css';
import cover from '../Images/img.png';
import { Link, useHistory } from 'react-router-dom';
import { ShortElemObj } from '../../Types/ShortElemObj';
import { GetReviewNum } from '../../Utils/GetReviewNum';
import { useRef } from 'react';

export type ShortsElemProps = ShortElemObj & {
  onDelete?: (id: number) => void;
  onEdit?: (id: number) => void;
  type: 'festival'|'edit';


}


const ShortsElem: React.FC<ShortsElemProps> = ({ id, title, year, genre, review,coverimg, description, onDelete, onEdit,type,producerID,producerName}) => {

  const history = useHistory();



  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    if(onDelete){
      onDelete(id);
    }
    
  }
  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    if(onEdit){
      onEdit(id);
    }
  
  }

   const [newReview, setReview] = React.useState(0);
   
   const handleReview: React.MouseEventHandler<HTMLButtonElement> = () => {
     let inputReview = (document.querySelector('#inputReview') as HTMLInputElement);
     console.log({inputReview})
     if(inputReview){
      setReview(Number.parseInt(inputReview.value));
      
        SubmitNewReview(newReview)
      
     }
     
   }


  const handleView: React.MouseEventHandler<HTMLButtonElement> = () => {
    history.push(`/festivals/${id}`);
  }

  const SubmitNewReview = (newReview: number) => {
    console.log({newReview})
    review.push(newReview);
    
  }

  return (<article className="ShortfilmsPage">
    <section className="shortfilm" >
      <div className="imgDiv">
        <img className="coverimg" src={cover} alt="profile" />
        {/* <img src={`${process.env.PUBLIC_URL}${coverimg}`}  alt="profile"/> */}
      </div>
      <div className="infoDiv">
        <h2>Title: {title}</h2>
        <h3>Year: {year}</h3>
        <h4>Genre: {genre}</h4>
        <p>Description: {description}</p>
        <h3 key={producerID}>Producer: {producerName? producerName.replace('Select option','') : 'NA'}</h3>
        {review.length>0 ? <h5>Review: {GetReviewNum(review)} </h5>: null}
        <div className="rating">
          <label>Rating</label><input id="inputReview" type="number" min={0} max={5} ></input>
          {/* All dar click en Add, agrega al review.length */}
          <button onClick={handleReview}>Add</button>
        </div>
            
      
        {type === 'edit' && <div className="btnDiv">
          <button onClick={handleView}>view</button>{onDelete &&
          <button className="button" onClick={handleDelete}>delete</button>}
          {onEdit&&<button className="button" onClick={handleEdit}>edit</button>}
      </div>
      }
      </div>
      
    </section>

   

  </article>);
}

export default ShortsElem;