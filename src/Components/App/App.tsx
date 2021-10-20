import React from 'react';
import Header from '../Header/Header';
import ShortsForm from '../ShortsForm/ShortsForm';
import ShortsElem, { ShortsElemProps } from '../Shorts/ShortsElem';
import FestivalElem from '../Festival/Festival';
import FestivalForm from '../Festival/FestivalForm';
import { GetReviewNum } from '../../Utils/GetReviewNum';
import ProducerForm from '../ProducerForm/ProducerForm';
import ProducerElem, { ProducerElemProps } from '../Producer/ProducerElem';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
} from "react-router-dom";



// type ProducerElemObj = ProducerElemProps & {
//   id: number;
//   name: string;
//   role: string;
//   profileimg: string;
//   backgroundimg: string;

// }

export type ShortElemObj = {
  id: number;
  coverimg: string;
  genre: string;
  year: number;
  description: string;
  title: string;
  review:number[];
}

function App() {

  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');
  const [editId, setEditId] = React.useState<number | null>(null);
  const [shortElems, setShortElems] = React.useState<ShortElemObj[]>([
    {
      id: 0,
      coverimg: 'adasdas',
      genre: 'Comedy',
      year: 2020,
      description: 'Shrek is an anti-social and highly-territorial green ogre who loves the solitude of his swamp. His life is interrupted after the dwarfish Lord Farquaad of Duloc unknowingly exiles a vast number of fairy-tale creatures to Shreks swamp. Angered by the intrusion, he decides to visit Farquaad and demand they be moved elsewhere. He reluctantly allows the talkative Donkey, who was exiled as well, to tag along and guide him to Duloc. Meanwhile, Farquaad is presented with Snow Whites Magic Mirror, who tells him that in order to become a true king, he must marry a princess',
      title: 'Skins',
      review:[0,1,0,0,5,4,2,1,3,4]      
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
        description: newShortElem.description,
        review:[]
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
    

  const handleCreateFestival = (shortElemId: number, newShortElem: ShortElemObj) => {

    const shortElemCopy = shortElems.slice();
    const editIndex = shortElems.findIndex((elem) => {
      if(elem.id === shortElemId) {
        return true;
      }
      return false;
    });

    shortElemCopy[editIndex] = {
      ...shortElems[editIndex],
      festivals: [
        ...shortElems[editIndex].festivals,
        newFestivalElem
      ]
    }

    setShortElems(shortElemCopy);
  }






  return (
    <div>
      <HashRouter>
        <Header />
        <Route path="/createShortfilms">
          <div><ShortsForm editId={editId}
            type={formType}
            onCreate={handleCreate}
            onEdit={handleEdit} />
          </div>

        </Route>

        <Route path="/shortfilms">
          {shortElems.map((elem) => {
            return <ShortsElem key={elem.id} {...elem}onDelete={handleDelete} type="edit"
              onEdit={handleBeginEdit}/>;
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
        <Route path="/festivals/:id">
            <FestivalElem
              list={shortElems}
              onCreateSong={handleCreateFestival}
              />
          </Route>
          
        <Route path="/festivals">

        </Route>

      </HashRouter>
    </div >


  );
}



export default App;
