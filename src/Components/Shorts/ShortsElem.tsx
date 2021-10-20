import * as React from 'react';
import './ShortsElem.css';
import cover from '../Images/img.png';
import { ShortElemObj } from '../App/App';
import { GetReviewNum } from '../../Utils/GetReviewNum';

export type ShortsElemProps = ShortElemObj & {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  type: 'detail'|'edit';


}


const ShortsElem: React.FC<ShortsElemProps> = ({ id, title, year, genre, review,coverimg, description, onDelete, onEdit, type}) => {




  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    onDelete(id);
  }
  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    onEdit(id);
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
      
        {type === 'edit' && <div className="btnDiv">
          <button className="button" onClick={handleDelete}>delete</button>
          <button className="button" onClick={handleEdit}>edit</button>
      </div>
      }
      </div>
      
    </section>



  </article>);
}

export default ShortsElem;