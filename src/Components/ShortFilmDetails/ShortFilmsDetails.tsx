import * as React from 'react';
import { Route } from 'react-router';
import { ShortElemObj } from '../../Types/ShortElemObj';
import { FestivalElemObj } from '../../Types/FestivalElemObj';
import { useGetElemByIdParam } from '../../Utils/useGetElemIdParams';
import { useIdParam } from '../../Utils/useIdParams';
// import { Links } from '../../Components/Header/Links/Links';
import ShortsElem from '../Shorts/ShortsElem';


interface ShortElemDetailsProps {
  list: ShortElemObj[];

}

const ShortFilmsDetails: React.FC<ShortElemDetailsProps> = ({ list}) => {
  const id = useIdParam();
  const elem = useGetElemByIdParam(list);

  if(!elem) return null;
  const { title, genre, year } = elem;


  return (<div>

    <Route path="/details/:id">
      <ShortsElem
              title={title}
              genre={genre}
              id={id}
              type="festival" coverimg={''} year={0} description={''} producerID={undefined} producerName={undefined} review={[]} festivals={[]}      />

    

 </Route>

    


  </div>);
}

export default ShortFilmsDetails;