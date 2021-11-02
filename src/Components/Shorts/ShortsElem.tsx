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
  type: 'festival' | 'edit';


}


const ShortsElem: React.FC<ShortsElemProps> = ({ id, title, year, genre, review, coverimg, description, onDelete, onEdit, type, producerID, producerName }) => {

  const history = useHistory();



  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (onDelete) {
      onDelete(id);
    }

  }
  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (onEdit) {
      onEdit(id);
    }

  }

  const [newReview, setReview] = React.useState(0);

  const handleReview: React.MouseEventHandler<HTMLButtonElement> = () => {
    let inputReview = (document.querySelector('#inputReview') as HTMLInputElement);
    console.log({ inputReview })
    if (inputReview) {
      setReview(Number.parseInt(inputReview.value));

      SubmitNewReview(newReview)

    }

  }


  const handleView: React.MouseEventHandler<HTMLButtonElement> = () => {
    history.push(`/festivals/${id}`);
  }

  const SubmitNewReview = (newReview: number) => {
    console.log({ newReview })
    review.push(newReview);

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
        <h4 key={producerID}>Produced by {producerName ? producerName.replace('Select option', '') : 'NA'}</h4>
        <p className="genre">{genre}</p>
        <p>{description}</p>
        
        <div className="ratings">
          {review.length > 0 ? <h5>Review:  {GetReviewNum(review)} </h5> : null}
          <div className="rating">
           <input id="inputReview" type="number" min={1} max={5} ></input>
            {/* All dar click en Add, agrega al review.length */}
            <button className="addbtn"onClick={handleReview}>Add</button>
          </div>
        </div>


        {type === 'edit' && <div className="btnDiv">
          <button className="button" onClick={handleView}>Festivals</button>
          {onEdit && <button className="button" onClick={handleEdit}>Edit</button>}
          {onDelete &&
            <button className="button" onClick={handleDelete}>Delete</button>}

        </div>
        }
      </div>

    </section>



  </article>);
}

export default ShortsElem;