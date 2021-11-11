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
  let allFestivals: FestivalElemObj[] = [];
  list.forEach(short => {
    short.festivals.forEach(fab => {

     
        allFestivals.push(fab);
      
      



    })
  })
  console.log({ allFestivals });
  allFestivals = allFestivals.filter((item,index)=> allFestivals.indexOf(item) === index);
  return allFestivals;
}



const Festivals: React.FC<FestivalsProps> = ({ list, onCreateFestival }) => {
  const [selected, setSelected] = useState<FestivalElemObj>();
  const { id: idString } = useParams<{ id: string }>();
  const id = parseFloat(idString);
  const [selectedID, setSelectedID] = React.useState('');
    const handleShortSelectedChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSelectedID(event.target.value);
    }
  const festivals = getFestivals(list); // here we extract festival from shorts
  console.log({ festivals });
  if (!festivals.length) {
    return <Redirect to="/404" />;
  }

  const addFestivaltoShort = function ( shortElemId: number, newFestivalElem: FestivalElemObj) {
    
    onCreateFestival(shortElemId, newFestivalElem);
  }


  return <>
  <h1 className="festivaltitle">Festivals</h1>
  
    {selected ?
      //Selected details option
      <div className="festivalsAdd">
        <FestivalDetails fest={selected} />
        <h3>Add to a shortfilm</h3>
        {
          getFilmsFromFestival(list, selected).map(f => {
            return <div>{f.title}</div>
          })
        }
        <select onChange={handleShortSelectedChange}>
          <option value={"none"}> </option>
          {list.map(f => {
            return <option value={f.id}>{f.title}</option>
          })}
        </select>
        <button onClick={()=>{addFestivaltoShort(Number.parseFloat(selectedID),selected)} }>Add Short to Festival</button>
      </div>

      :
      //list of all festivals
      <ol>
        {festivals.map(fest => <button onClick={() => { setSelected(fest); }}> <Festival fest={fest} /></button>)}
      </ol>
    }

    {/* <h2 className="festivaltitle">Total festivals: {festivals.length}</h2> */}
    {true && <FestivalForm onCreateFestival={onCreateFestival} shortElemId={id} />}
  </>
}

const FestivalDetails = ({ fest }: any,) => {

  return (<div className="festivals" key={fest.id}>
    <h2>{fest.title}</h2>
    <h3>{fest.season}</h3>
    <p>{fest.award}</p>
    <div>


      

      
    </div>
  </div>);
}

export default Festivals;

