import * as React from 'react';
import './ShortsElem.css';
import cover from '../Images/img.png';
import { Link, useHistory } from 'react-router-dom';
import { ShortElemObj } from '../../Types/ShortElemObj';
import { GetReviewNum } from '../../Utils/GetReviewNum';

export type ShortsElemProps = ShortElemObj & {
  onDelete?: (id: number) => void;
  onEdit?: (id: number) => void;
  type: 'festival'|'edit';


}


const ShortsElem: React.FC<ShortsElemProps> = ({ id, title, year, genre, review,coverimg, description, onDelete, onEdit,type}) => {

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

  // const [newReview, setReview] = React.useState(0);
  // const handleReview: React.MouseEventHandler<HTMLButtonElement> = () => {
  //   setReview(Number.parseInt(event.target.value));
  // }


  const handleView: React.MouseEventHandler<HTMLButtonElement> = () => {
    history.push(`/festivals/${id}`);
  }


  return (<article className="ShortfilmsPage">
    <section className="shortfilm" >
      <div className="imgDiv">
        <img className="coverimg" src={cover} alt="profile" />
        {/* <img src={`${process.env.PUBLIC_URL}${coverimg}`}  alt="profile"/> */}
      </div>
      <div className="infoDiv">
        <h2>{title}</h2>
        <h3>{year}</h3>
        <h4>{genre}</h4>
        <p>{description}</p>
        {review.length>0 ? <h5>Review: {GetReviewNum(review)} </h5>: null}
        <div className="rating">
          <label>Rating</label><input type="number" min={0} max={5}></input>
          {/* All dar click en Add, agrega al review.length */}
          <button>Add</button>
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