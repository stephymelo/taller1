import * as React from 'react';
import { Route } from 'react-router';
import { ShortElemObj } from '../../Types/ShortElemObj';
import { FestivalElemObj } from '../../Types/FestivalElemObj';
import { useGetElemByIdParam } from '../../Utils/useGetElemIdParams';
import { useIdParam } from '../../Utils/useIdParams';
// import { Links } from '../../Components/Header/Links/Links';
import ShortsElem from '../Shorts/ShortsElem';
import './ShortFilmsDetails.css';


interface ShortElemDetailsProps {
  list: ShortElemObj[];

}

const ShortFilmsDetails: React.FC<ShortElemDetailsProps> = ({ list }) => {
  const id = useIdParam();
  const elem = useGetElemByIdParam(list);


  //Spread operator

  if (!elem) return null;
  const { title, genre, year, coverimg, description, producerID, producerName, festivals } = elem;




  return (<div>
    <Route path="/shorts/:id">



      <ShortsElem
        title={title}
        genre={genre}
        id={id}
        state="selected"
        type="festival" coverimg={coverimg} year={year} description={description} producerID={producerID} producerName={producerName} review={[]} festivals={[]} />

      <div className="festivalsShort">
      <h2>Festivals</h2>
        {festivals.map(festivals => {
          return <div className="fes">
           
            <h3>{festivals.title}</h3>
            <h4>{festivals.season}</h4>
            <p>{festivals.award}</p>
          </div>
        })}
      </div>
    </Route>




  </div>);
}

export default ShortFilmsDetails;