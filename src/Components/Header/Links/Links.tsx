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
                        <Link className="elem" to="/createShortfilms">Add Short film</Link>
                    </li>
                    <li>
                        <Link className="elem" to="/shortfilms">Short films</Link>
                    </li>
                    <li>
                        <Link className="elem" to="/producer">My page</Link>
                    </li>
                    <li>
                        <Link className="elem" to="/createProducer">Sign up</Link>
                    </li>
                    <li>
                        <Link className="elem" to="/festivals">Festivals </Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
       
);
}




  export default Links; 