import React from 'react';
import Header from '../Header/Header';
import ShortsForm from '../ShortsForm/ShortsForm';
import ShortsElem, { ShortsElemProps } from '../Shorts/ShortsElem';
import ProducerForm from '../ProducerForm/ProducerForm';
import ProducerElem, { ProducerElemProps } from '../Producer/ProducerElem';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
} from "react-router-dom";



type ProducerElemObj = ProducerElemProps & {
  id: number;
  name: string;
  role: string;
  profileimg: string;
  backgroundimg: string;

}

type ShortElemObj = {
  id: number;
  coverimg: string;
  genre: string;
  year: number;
  description: string;
  title: string;
}

function App() {

  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');
  const [editId, setEditId] = React.useState<number | null>(null);
  const [shortElems, setShortElems] = React.useState<ShortElemObj[]>([
    {
      id: 0,
      coverimg: 'adasdas',
      genre: '',
      year: 2020,
      description: 'eeferf',
      title: 'Nuevo elemento'
    },
  ]);

  const handleCreate = (newShortElem: { title: string, genre: string, year: number, coverimg: string, description: string }) => {



    const newArray = [
      ...shortElems,
      {
        id: Math.random(),
        title: newShortElem.title,
        genre: newShortElem.genre,
        year: newShortElem.year,
        coverimg: newShortElem.coverimg,
        description: newShortElem.description
      }
    ];
    setShortElems(newArray);
  }

  const handleDelete = (deleteId: number) => {

    const shortElemsCopy = shortElems.filter((elem) => {
      if (elem.id === deleteId) {
        return false;
      } else {
        return true;
      }
    });
    setShortElems(shortElemsCopy);
  }


  const handleEdit = (editId: number, editMusicElem: { title: string }) => {
    console.log(editId, editMusicElem);

    const shortElemsCopy = shortElems.slice();
    const editIndex = shortElems.findIndex((elem) => {
      if (elem.id === editId) {
        return true;
      }
      return false;
    });
    shortElemsCopy[editIndex] = {
      ...shortElems[editIndex],
      ...editMusicElem,
    }

    setShortElems(shortElemsCopy);
  }

  const handleBeginEdit = (editId: number) => {
    setEditId(editId);
    setFormType('edit');
  }
    



/////// PRODUCER USER

    //   const [producerElems, setProducerElems] = React.useState<ProducerElemObj[]>([
    //     id:0,

        

    //   ]);

      
    //   const handleCreateP = (newProducerElem: {name: string, role: string, profileimg: string, backgroundimg: string}) => {



    //     const newArrayP = [
    //       ...producerElems,
    //       {
    //         id: Math.random(),
    //         role: newProducerElem.role,
    //         name: newProducerElem.name,
    //         profileimg: newProducerElem.profileimg,
    //         backgroundimg: newProducerElem.backgroundimg
    //       }
    //     ];
    //     setProducerElems(newArrayP);
    //   }
    //   const handleDeleteP = (deleteId: number) => {
    //     const musicElemsCopy = producerElems.filter((elem) => {
    //       if(elem.id === deleteId) {
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     });
    //     setProducerElems(musicElemsCopy);
    //   }
    // }






  return (
    <div>
      <HashRouter>
        <Header />
        <Route path="/createShortfilms">
          <h2>short films</h2><div><ShortsForm editId={editId}
            type={formType}
            onCreate={handleCreate}
            onEdit={handleEdit} />
          </div>

        </Route>

        <Route path="/shortfilms">
          {shortElems.map((elem) => {
            return <ShortsElem key={elem.id} title={elem.title} genre={elem.genre} year={elem.year} description={elem.description} coverimg={elem.coverimg} onDelete={handleDelete}
              onEdit={handleBeginEdit} id={elem.id} />;
          })}
        </Route>
        <Route path="/producer">
        {/* {producerElems.map((elem) => {
          return <ProducerElem 
          key={elem.id} id={elem.id} name={elem.name} role={elem.role} profileimg={elem.profileimg} backgroundimg={elem.backgroundimg} onDelete={handleDelete}onEdit={handleBeginEdit} />;
        })} */}

        </Route>

        <Route path="/createProducer">
          {/* <h2>ProducerUser</h2><div>
        <ProducerForm editId={editId}
            type={formType}
            onCreate={handleCreate}
            onEdit={handleEdit} />
        </div> */}

        </Route>
        <Route path="/festivals">

        </Route>

      </HashRouter>
    </div >


  );
}



export default App;
