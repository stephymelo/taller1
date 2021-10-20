import * as React from 'react';
import { Redirect, Route, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FestivalElemObj } from '../../Types/FestivalElemObj';
import { ShortElemObj } from '../../Types/ShortElemObj';
import ShortsElem from '../Shorts/ShortsElem';
import FestivalForm from './FestivalForm';

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
      const { title, season, award } = elem;
    
      const handleCreateSongElem = (newFestivalElem: FestivalElemObj) => {
        onCreateFestival(id, newFestivalElem);
      }
    


    return(<div></div>);
}


export default FestivalElem;
