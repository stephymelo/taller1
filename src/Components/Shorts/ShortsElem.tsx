import * as React from 'react';
import './ShortsElem.css';
import cover from '../Images/img.png';

export interface ShortsElemProps {
  id: number;
  title: string;
  genre: string;
  year: number;
  coverimg: string;
  description: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;


}


const ShortsElem: React.FC<ShortsElemProps> = ({ id, title, year, genre, coverimg, description, onDelete, onEdit }) => {




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
        <p>{genre}</p>
        <p>{description}</p>
        <div className="btnDiv">
          <button className="button" onClick={handleDelete}>delete</button>
          <button className="button" onClick={handleEdit}>edit</button>
      </div>
      </div>
      
    </section>



  </article>);
}

export default ShortsElem;