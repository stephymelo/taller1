import * as React from 'react';
import './ProducerElem.css';

export interface ProducerElemProps {
  id: number;
  name: string;
  role: string;
  profileimg: string;
  backgroundimg: string;
  onDelete: (id: number) => void;

}

const ProducerElem: React.FC<ProducerElemProps> = ({ id, name,role, profileimg, backgroundimg, onDelete}) => {



  // console.log(process.env.PUBLIC_URL+"/img/C:/fakepath/"+profileimg);
  const style: React.CSSProperties = { 
    backgroundImage: backgroundimg,
  }

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    onDelete(id);
  }

  return (<article className="ProducerPage">
    <section className="profileBanner" ></section>
    <div style={style}>
      <img src={`${process.env.PUBLIC_URL}${profileimg}`}  alt="profile"/>
     
    </div>
    <div>
    <h2>{name}</h2>
    <h3>{role}</h3>
    <button onClick={handleDelete}>delete</button>

    </div>
    
    



  </article>);
}

export default ProducerElem;