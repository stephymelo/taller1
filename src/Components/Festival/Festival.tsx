import * as React from 'react';
import { Redirect, Route, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FestivalElemObj } from '../../Types/FestivalElemObj';
import { ShortElemObj } from '../../Types/ShortElemObj';
import ShortsElem from '../Shorts/ShortsElem';
import FestivalForm from './FestivalForm';
import './Festival.css';


interface FestivalElemProps {
    list: ShortElemObj[];
    onCreateFestival: (shortElemId: number, newFestivalElem: FestivalElemObj)=> void;
}


const FestivalElem: React.FC<FestivalElemProps> = ({list, onCreateFestival}) =>{
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);

    const elem = list.find((elem) => {
        if(elem.id === id) {
          return true;
        } else {
          return false;
        }
      });
    
      if(!elem) {
        return <Redirect to="/404" />;
      }
      const { coverimg,genre,year,description,title,review,festivals } = elem;
    
      const handleCreateFestivalElem = (newFestivalElem: FestivalElemObj) => {
        onCreateFestival(id, newFestivalElem);
      }
    


    return(<div>
        <Route path="/festival/:id">
      <ShortsElem
                title={title}
                year={year}
                genre={genre}
                description={description}
                coverimg={coverimg}
                review={review}
                id={id}
                type="festival" festivals={[]}      />

      <h2 className="festivaltitle">Total festivals: {festivals.length}</h2>

      <ol>
        {festivals.map(festivalElem => {
          return <li key={festivalElem.id}>{festivalElem.title} - {festivalElem.season}-{festivalElem.award}</li>
        })}
      </ol>

      <Link to={`/festival/${id}/new-festival`}>Add festival</Link>
    </Route>

    <Route path="/festival/:id/new-festival">
      <FestivalForm
        onCreate={handleCreateFestivalElem}
      />
    </Route>






    </div>);
}


export default FestivalElem;
