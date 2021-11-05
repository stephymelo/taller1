import * as React from 'react';
import './ProducerElem.css';
import cover from '../Images/img.png';
import profile from '../Images/profile.jpeg';
import bg from '../Images/bgimg.jpeg';
import { ProducerElemObj } from '../../Types/ProducerElemObj';
import { ShortElemObj } from '../../Types/ShortElemObj';

export type ProducerElemProps = ProducerElemObj & {

  shortFims?: ShortElemObj[];

}



const ProducerElem: React.FC<ProducerElemProps> = ({ id, firstname, lastname, role, profileimg, backgroundimg, shortFims }) => {




  // console.log(process.env.PUBLIC_URL+"/img/C:/fakepath/"+profileimg);
  const style: React.CSSProperties = {

    background: `url(${bg})`,


  }


  const producerShortFilms = shortFims?.filter(producerId => Number.parseFloat(producerId.producerID!) === id)




  return (<article className="producerPage">
    <section className="profileBanner" >
      <div className="banner" style={style}>
        {/* <img src={`${process.env.PUBLIC_URL}${profileimg}`}  alt="profile"/> */}
        {/* <img className="profileimg" src={bg} alt="profile" /> */}
        <div className="profile">

          <img className="profileimg" src={profile} alt="profile" />

          <div className="name">
            <div className="names">
              <h2 className="name__1">{firstname}</h2>
              <h2 className="name__2">{lastname}</h2>
            </div>
            <h3 className="role__1">{role}</h3>

          </div>
        </div>
      </div>
      <div className="proyects">
        <h2 className="shorth3">Shorts</h2>
        <div className="container_shorts">
          {
            producerShortFilms!.map(short => {
              return <div className="shortElem">
                <div className="shortdiv">
                  <h1 className="title">{short.title}, {short.year}</h1>
                  <p>{short.genre}</p>
                </div>
                <img className="shortimg" src={cover} alt="profile" />

              </div>
            })

          }

        </div>
      </div>
    </section>







  </article >);
}

export default ProducerElem;