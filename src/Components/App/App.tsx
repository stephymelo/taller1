import React from 'react';
import Header from '../Header/Header';
import ShortsForm from '../ShortsForm/ShortsForm';
import ShortsElem, { ShortsElemProps } from '../Shorts/ShortsElem';
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
      genre: 'comedy',
      year: 2020,
      description: 'Shrek is an anti-social and highly-territorial green ogre who loves the solitude of his swamp. His life is interrupted after the dwarfish Lord Farquaad of Duloc unknowingly exiles a vast number of fairy-tale creatures to Shreks swamp. Angered by the intrusion, he decides to visit Farquaad and demand they be moved elsewhere. He reluctantly allows the talkative Donkey, who was exiled as well, to tag along and guide him to Duloc. Meanwhile, Farquaad is presented with Snow Whites Magic Mirror, who tells him that in order to become a true king, he must marry a princess. Farquaad chooses Princess Fiona, who is imprisoned in a castle tower guarded by a dragon. Unwilling to perform the task himself, he organizes a tournament in which the winner will receive the privilege of rescuing Fiona. Shrek and Donkey arrive during the tournament and defeat Farquaads knights. Farquaad proclaims them champions and demands that they rescue Fiona. Shrek negotiates to have the fairytale creatures relocated if he succeeds, and Farquaad accepts.',
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
            return <ShortsElem key={elem.id} {...elem}onDelete={handleDelete}
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
        <Route path="/festivals">

        </Route>

      </HashRouter>
    </div >


  );
}



export default App;
