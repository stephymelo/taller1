import React from 'react';
import ProducerForm from '../ProducerForm/ProducerForm';
import ProducerElem, {ProducerElemProps} from '../Producer/ProducerElem';
import './App.css';


type ProducerElemObj = ProducerElemProps & {
  id: number;
}

function App() {

  const [ producerElems, setProducerElems ] = React.useState<ProducerElemObj[]>([]);

  const handleCreate = (newProducerElem: ProducerElemProps) => {
   

   
    const newArray = [
      ...producerElems, // ponemos todos los elementos que ya existían
      { // agregamos el nuevo elemento con la información recibida
        id: Math.random(),
        role: newProducerElem.role,
        name: newProducerElem.name,
        profileimg: newProducerElem.profileimg,
        backgroundimg:newProducerElem.backgroundimg
      }
    ];
    setProducerElems(newArray);
  }





  return (
   <div>
      <ProducerForm onCreate={handleCreate} />
      {producerElems.map((elem) => {
        return <ProducerElem key={elem.id} name={elem.name} role={elem.role} profileimg={elem.profileimg} backgroundimg={elem.backgroundimg} />;
      })}
   </div>
  );
}

export default App;
