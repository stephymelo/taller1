import React from "react";
import {
    Link,
  } from "react-router-dom";
  


  interface Links {

}

const Links: React.FC<Links> = ({ }) => {

    return( 
        <div>
            <nav className="menu">
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
        </div>
       
);
}




  export default Links; 