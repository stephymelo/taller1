import * as React from 'react';
import './ProducerElem.css';

export interface ProducerElemProps {
  name: string;
  role: string;
  profileimg: string;
  backgroundimg: string;

}

const ProducerElem: React.FC<ProducerElemProps> = ({ name,role, profileimg, backgroundimg}) => {



  console.log(process.env.PUBLIC_URL+"/img/C:/fakepath/"+profileimg);
  const style: React.CSSProperties = { 
    backgroundImage: backgroundimg,
  }


  return (<article className="ProducerPage">
    <section className="profileBanner" ></section>
    <div style={style}>
      <img src={`${process.env.PUBLIC_URL}${profileimg}`}  alt="profile"/>
    </div>
    <div>
    <h2>{name}</h2>
    <h3>{role}</h3>

    </div>
    
    



  </article>);
}

export default ProducerElem;