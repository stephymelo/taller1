import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { FestivalElemObj } from '../../Types/FestivalElemObj';
import { ShortElemObj } from '../../Types/ShortElemObj';
import FestivalForm from './FestivalForm';
import './Festival.css';
import { title } from 'process';

const Festival = ({ fest }: any) => {
  return (<>

    <li key={fest.id}>{fest.title} - {fest.season}-{fest.award}</li>
  </>);
}



interface FestivalsProps {
  list: ShortElemObj[];
  onCreateFestival: (shortElemId: number, newFestivalElem: FestivalElemObj) => void;
}

const getFilmsFromFestival = (list: ShortElemObj[], selected: any) => {
  let shortSelected: ShortElemObj[];
  shortSelected = list
    .filter((element) =>
      element.festivals.some((subElement) => subElement.id == selected.id))
    .map(element => {
      return Object.assign({}, element, { festivals: element.festivals.filter(subElement => subElement.id == selected.id) });

    });
  console.log({ shortSelected });
  return shortSelected;
}

const getFestivals = (list: ShortElemObj[]) => {
  const allFestivals: FestivalElemObj[] = [];
  list.forEach(short => {
    short.festivals.forEach(fab => {

      allFestivals.push(fab);



    })
  })
  console.log({ allFestivals });
  return allFestivals;
}

const addFestivaltoShort = function (onCreateFestival, shortElemId: number, newFestivalElem: FestivalElemObj) {
  onCreateFestival(shortElemId, newFestivalElem);
}

const Festivals: React.FC<FestivalsProps> = ({ list, onCreateFestival }) => {
  const [selected, setSelected] = useState<FestivalElemObj>();
  const { id: idString } = useParams<{ id: string }>();
  const id = parseFloat(idString);
  const festivals = getFestivals(list); // here we extract festival from shorts
  console.log({ festivals });
  if (!festivals.length) {
    return <Redirect to="/404" />;
  }


  return <>
  <h2 className="festivaltitle">Festival</h2>
  
    {selected ?
      //Selected details option
      <div>
        <FestivalDetails fest={selected} />
        <h3>Films Selected</h3>
        {
          getFilmsFromFestival(list, selected).map(f => {
            return <div>{f.title}</div>
          })
        }
        <select>
          <option value={"none"}>Select Option</option>
          {list.map(f => {
            return <option value={f.id}>{f.title}</option>
          })}
        </select>
        <button onClick={()=>{addFestivaltoShort(onCreateFestival(id,selected),id,selected)} }>Add Short to Festival</button>
      </div>

      :
      //list of all festivals
      <ol>
        {festivals.map(fest => <button onClick={() => { setSelected(fest); }}> <Festival fest={fest} /></button>)}
      </ol>
    }

    <h2 className="festivaltitle">Total festivals: {festivals.length}</h2>
    {true && <FestivalForm onCreateFestival={onCreateFestival} shortElemId={id} />}
  </>
}

const FestivalDetails = ({ fest }: any,) => {

  return (<div key={fest.id}>
    <h1>{fest.title}</h1>
    <h2>{fest.season}</h2>
    <h2>{fest.award}</h2>
    <div>


      

      
    </div>
  </div>);
}

export default Festivals;