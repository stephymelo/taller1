import React from 'react';
import Header from '../Header/Header';
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
}

function App() {


  function Festival() {
    return <h2>Festivals</h2>;
  }


  function Shortfilms() {
    return <h2>short films</h2>;
  }





  function ProducerUser() {
    const [producerElems, setProducerElems] = React.useState<ProducerElemObj[]>([]);

    const handleCreate = (newProducerElem: ProducerElemProps) => {



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
    return <><h2>ProducerUser</h2><div>
      <ProducerForm onCreate={handleCreate} />
      {producerElems.map((elem) => {
        return <ProducerElem key={elem.id} name={elem.name} role={elem.role} profileimg={elem.profileimg} backgroundimg={elem.backgroundimg} />;
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
