import React from 'react';
import ProducerForm from '../ProducerForm/ProducerForm';
import ProducerElem, { ProducerElemProps } from '../Producer/ProducerElem';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


/// import photos
import logo from '../Images/logo.png';


type ProducerElemObj = ProducerElemProps & {
  id: number;
}

function App() {







  return (

    <><Router>
      <div>
        <nav className="menu">
          
          <img className="logo" src={logo} alt="logo" />
      
          <ul className="menulist">
            <li className="menulistElem">
              <Link className="elem" to="/">Home</Link>
            </li>
            <li>
              <Link className="elem" to="/shortfilms">Short films</Link>
            </li>
            <li>
              <Link className="elem" to="/producerUser">ProducerUser</Link>
            </li>
            <li>
              <Link className="elem" to="/festivals">Festivals </Link>
            </li>
            <li>
              <Link className="elem" to="/login">Log in</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/shortfilms">
            <Shortfilms />
          </Route>
          <Route path="/producerUser">
            <ProducerUser />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/festivals">
            <Festival />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      
      </>
  );
}
////
function Login() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Login</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

     
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
  
}

function Topic() {
  const { topicId } = useParams() as { 
    topicId: string;
  }
  return <h3>Requested topic ID: {topicId}</h3>;
  
}

////
function Home() {
  return <h2>Home</h2>;
}

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



export default App;
