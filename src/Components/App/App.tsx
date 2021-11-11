import React from 'react';
import Header from '../Header/Header';
import ShortsForm from '../ShortsForm/ShortsForm';
import ShortsElem, { /*ShortsElemProps*/ } from '../Shorts/ShortsElem';
import FestivalElem from '../Festival/Festival';
import FestivalForm from '../Festival/FestivalForm';
import { ShortElemObj } from '../../Types/ShortElemObj';
import { ProducerElemObj } from '../../Types/ProducerElemObj';
//import { GetReviewNum } from '../../Utils/GetReviewNum';
import ProducerForm from '../ProducerForm/ProducerForm';
import ProducerElem, { ProducerElemProps } from '../Producer/ProducerElem';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
} from "react-router-dom";
import { FestivalElemObj } from '../../Types/FestivalElemObj';
import Graphics from '../Graphics/Graphics';
import ShortFilmsDetails from '../ShortFilmDetails/ShortFilmsDetails';



function App() {

  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');
  const [editId, setEditId] = React.useState<number | null>(null);
  const [producerElems,setProducerElems] = React.useState<ProducerElemObj[]>([
   {
     id:0,
     firstname: 'Stephy',
     lastname: 'Melo',
     role: 'Director',
     backgroundimg: 'asadw',
     profileimg:'adwdq'
    } ,
    {
      id:1,
      firstname: 'Matthew',
      lastname: 'Melo',
      role: 'Director',
      backgroundimg: 'asadw',
      profileimg:'adwdq'
     } 

  ]);

  
  
  const [shortElems, setShortElems] = React.useState<ShortElemObj[]>([
    {
      id: 0,
      coverimg: 'https://popcornandtequila.com/wp-content/uploads/2020/08/a-rodeo-film.png',
      genre: 'Comedy',
      year: 2020,
      description: 'Shrek is an anti-social and highly-territorial green ogre who loves the solitude of his swamp. His life is interrupted after the dwarfish Lord Farquaad of Duloc unknowingly exiles a vast number of fairy-tale creatures to Shreks swamp. Angered by the intrusion, he decides to visit Farquaad and demand they be moved elsewhere. He reluctantly allows the talkative Donkey, who was exiled as well, to tag along and guide him to Duloc. Meanwhile, Farquaad is presented with Snow Whites Magic Mirror, who tells him that in order to become a true king, he must marry a princess',
      title: 'Skins',
      review: [1, 1, 2, 3, 5, 4, 2, 1, 3, 4],
      producerID: '0',
      producerName: 'Stephy',
      festivals: [
        {
          id: 0,
          title: "Sundance",
          season: "Winter",
          award: "Best Film"
        }
      ]
    },
    {
      id: 1,
      coverimg: 'https://static.shortoftheweek.com/wp-content/uploads/2021/11/They-Hear-It-Julian-Terry-Horror-Short-Film-01.jpg',
      genre: 'Suspense',
      year: 2018,
      description: 'Every legend has a beginning. From the creators of League of Legends comes a new animated series, Arcane, which follows the origins of two iconic champions and a city on the brink of civil war',
      title: 'Girl gone',
      review: [1, 4, 4, 4, 4, 4, 4, 1, 3, 4],
      producerID: '1',
      producerName: 'Matthew',
      festivals: [
        {
          id: 1,
          title: "Toronto",
          season: "Summer",
          award: "Best Director"
        }
      ]
    },
    {
      id: 2,
      coverimg: 'https://shortshorts.org/2019/film/wp-content/uploads/2019/04/6a0dddca17730a8fe0fbfac97d80210e-1024x429.jpg',
      genre: 'Horror',
      year: 2019,
      description: 'The film is about a family on vacation. After 11 years of continuous work, Alex Peinado decides to spend a well earned holiday with his family. He goes on a road trip towards Cartagena, with his wife, his mother in law, his two teenage children and his dog Kaiser. But the journey is not his only motivation, as Alex hides a plan that requires them to reach their destination on time. On the way the road trip will become the most incredible adventure, which puts at risk their arrival to the Colombian coast',
      title: 'See men',
      review: [5, 5,5, 5, 5, 5],
      producerID: '0',
      producerName: 'Stephy',
      festivals: [
        {
          id: 2,
          title: "Fantasia",
          season: "Fall",
          award: "Best Sountrack"
        }
      ]
    },
  ]);

  console.log(shortElems);

  const handleCreate = (newShortElem: { title: string, genre: string, year: number, coverimg: string, description: string, producerName: string | undefined, producerID: string | undefined}) => {
    const newArray = [
      ...shortElems,
      {
        id: Math.random(),
        title: newShortElem.title,
        genre: newShortElem.genre,
        year: newShortElem.year,
        coverimg: newShortElem.coverimg,
        description: newShortElem.description,
        producerID: newShortElem.producerID,
        producerName: newShortElem.producerName,
        review: [],
        festivals: []
      }
    ];
    setShortElems(newArray);
  }

  // const [producerElems, setProducerElems] = React.useState<ProducerElemProps[]>([])

  const handleCreateProducer = (newProducer: ProducerElemObj ) => {
    const newArray = [
      ...producerElems,
      {
        id: Math.random(),
        firstname: newProducer.firstname,
        lastname: newProducer.lastname,
        role: newProducer.role,
        profileimg: newProducer.profileimg,
        backgroundimg: newProducer.backgroundimg,

      }
    ];
    setProducerElems(newArray);
  }




  /// Borrar elemento de Short

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


  /// Editar Short
  const handleEdit = (editId: number, editShortElem: { title: string }) => {
    console.log(editId, editShortElem);

    const shortElemsCopy = shortElems.slice();
    const editIndex = shortElems.findIndex((elem) => {
      if (elem.id === editId) {
        return true;
      }
      return false;
    });
    shortElemsCopy[editIndex] = {
      ...shortElems[editIndex],
      ...editShortElem,
    }

    setShortElems(shortElemsCopy);
  }

  const handleBeginEdit = (editId: number) => {
    setEditId(editId);
    setFormType('edit');
  }


  const handleCreateFestival = (shortElemId: number, newFestivalElem: FestivalElemObj) => {
    console.log({shortElemId});
    console.log({newFestivalElem})
    const shortElemCopy = shortElems.slice();
    const editIndex = shortElems.findIndex((elem) => {
      if (elem.id === shortElemId) {
        console.log("es igual id");
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
        <Switch>
          <Route path="/createShortfilms">
            <div><ShortsForm
              editId={editId}
              type={formType}
              onCreate={handleCreate}
              onEdit={handleEdit}
              producerElems={producerElems}
               />
            </div>

          </Route>

          <Route path="/shortfilms">
            {shortElems.map((elem) => {
              return <ShortsElem key={elem.id} {...elem} onDelete={handleDelete} type="edit"
                onEdit={handleBeginEdit} />;
            })}
          </Route>
        //productor
          <Route path="/producer">
            {
              producerElems.map((elem) => {
                return <ProducerElem
                  key={elem.id}
                  id={elem.id}
                  firstname={elem.firstname}
                  lastname={elem.lastname}
                  role={elem.role}
                  profileimg={elem.profileimg}
                  backgroundimg={elem.backgroundimg}
                  shortFims={shortElems}
                />;
              })
            }

          </Route>

          <Route path="/createProducer">
            <div>
              <div>
                <ProducerForm
                  onCreate={handleCreateProducer}
                />
              </div>
            </div>
            { }

          </Route>


          <Route exact={true} path="/festivals/:id">
            <div>
              
              <FestivalElem
                list={shortElems}
                onCreateFestival={handleCreateFestival}
              />
            </div>
          </Route>

          <Route exact={true} path="/shorts/:id">
            <div>
              
              <ShortFilmsDetails
                list={shortElems}
              />
            </div>
          </Route>

          <Route path="/filmsStadists" >
           <Graphics  list={shortElems}></Graphics> 
           </Route> 

          <Route path='/404' exact={true}  >
            {
              <div>
                <h2>Error 404</h2>
                <p>Some error occurred, please try again.</p>
              </div>

            }
          </Route>

        </Switch>

      </HashRouter>
    </div >


  );
}



export default App;
