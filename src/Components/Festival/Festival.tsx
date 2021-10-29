import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { FestivalElemObj } from '../../Types/FestivalElemObj';
import { ShortElemObj } from '../../Types/ShortElemObj';
import FestivalForm from './FestivalForm';
import './Festival.css';

const Festival = ({ fest }: any) => {
  return (<>

    <li key={fest.id}>{fest.title} - {fest.season}-{fest.award}</li>
  </>);
}

const FestivalDetails = ({ fest }: any) => {
  return (<div key={fest.id}>
    <h1>{fest.title}</h1>
    <h2>{fest.season}</h2>
    <h2>{fest.award}</h2>
  </div>);
}

interface FestivalsProps {
  list: ShortElemObj[];
  onCreateFestival: (shortElemId: number, newFestivalElem: FestivalElemObj) => void;
}


const Festivals: React.FC<FestivalsProps> = ({ list, onCreateFestival }) => {
  const { festivals } = list[0];
  const [selected, setSelected] = useState<any>();
  const { id: idString } = useParams<{ id: string }>();
  const id = parseFloat(idString);

  if (!festivals.length) {
    return <Redirect to="/404" />;
  }

  console.log(id)
  return <>
    {selected ?
      //Selected details option
      <FestivalDetails fest={selected} />
      :
      //list of all festivals
      <ol>
        {festivals.map(fest => <button onClick={() => setSelected(fest)}> <Festival fest={fest} /></button>)}
      </ol>
    }

    <h2 className="festivaltitle">Total festivals: {festivals.length}</h2>
    {true && <FestivalForm onCreateFestival={onCreateFestival} shortElemId={id} />}
  </>
}



export default Festivals;