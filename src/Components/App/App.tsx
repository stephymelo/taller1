import React from 'react';
import Header from '../Header/Header';
import ShortsForm from '../ShortsForm/ShortsForm';
import ShortsElem, { ShortsElemProps } from '../Shorts/ShortsElem';
import ProducerForm from '../ProducerForm/ProducerForm';
import ProducerElem, { ProducerElemProps } from '../Producer/ProducerElem';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



type ProducerElemObj = ProducerElemProps & {
  id: number;
  name: string;
  role: string;
  profileimg: string;
  backgroundimg: string;

}

type ShortElemObj = ShortsElemProps & {
  id: number;
}

function App() {


  function Festival() {
    return <h2>Festivals</h2>;
  }


  function Shortfilms() {

    const [shortElems, setShortElems] = React.useState<ShortElemObj[]>([]);

    const handleCreate = (newShortElem: ShortsElemProps) => {



      const newArray = [
        ...shortElems,
        {
          id: Math.random(),
          title: newShortElem.title,
          genre:newShortElem.genre,
          year: newShortElem.year,
          rating:newShortElem.rating,
          coverimg:newShortElem.coverimg,
          description: newShortElem.description
        }
      ];
      setShortElems(newArray);
    }



    return <><h2>short films</h2><div><ShortsForm onCreate={handleCreate} />
      {shortElems.map((elem) => {
        return <ShortsElem key={elem.id} title={elem.title} genre={elem.genre} year={elem.year} rating={elem.rating} description={elem.description} coverimg={elem.coverimg} />;
      })}
      </div></>
    
    ;
  }





  function ProducerUser() {


    const [producerElems, setProducerElems] = React.useState<ProducerElemObj[]>([
     
    ]);

    const handleCreate = (newProducerElem: {name: string, role: string, profileimg: string, backgroundimg: string}) => {



      const newArray = [
        ...producerElems,
        {
          id: Math.random(),
          role: newProducerElem.role,
          name: newProducerElem.name,
          profileimg: newProducerElem.profileimg,
          backgroundimg: newProducerElem.backgroundimg
        }
      ];
      setProducerElems(newArray);
    }
///////////
    const handleDelete = (deleteId: number) => {
      const musicElemsCopy = producerElems.filter((elem) => {
        if(elem.id === deleteId) {
          return false;
        } else {
          return true;
        }
      });
      setProducerElems(musicElemsCopy);
    }
/////////////
    return <><h2>ProducerUser</h2><div>
      <ProducerForm onCreate={handleCreate} />
      {producerElems.map((elem) => {
        return <ProducerElem 
        key={elem.id} id={elem.id} name={elem.name} role={elem.role} profileimg={elem.profileimg} backgroundimg={elem.backgroundimg} onDelete={handleDelete} />;
      })}
    </div></>

      ;
  }
  




  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/shortfilms">
            <Shortfilms />
          </Route>
          <Route path="/producerUser">
            <ProducerUser />
          </Route>
          <Route path="/festivals">
            <Festival />
          </Route>
        </Switch>
      </Router>
    </div>


  )
}



export default App;
