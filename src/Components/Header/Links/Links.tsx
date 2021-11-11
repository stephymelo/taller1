import React from "react";
import './Links.css'
import {
    Link,
} from "react-router-dom";



interface Links {

}

const Links: React.FC<Links> = ({ }) => {

    return (

        <nav className="menu">
            <ul className="menulist">
                <li>
                    <Link className="elem" to="/createShortfilms">Add Short film</Link>
                </li>
                <li>
                    <Link className="elem" to="/shortfilms">Short films</Link>
                </li>
                <li>
                    <Link className="elem" to="/producer">Producers</Link>
                </li>
                <li>
                    <Link className="elem" to="/createProducer">Add Producer</Link>
                </li>
                <li>
                    <Link className="elem" to="/festivals/0">Festivals</Link>
                </li>
                <li>
                    <Link className="elem" to="/shorts/0">Short</Link>
                </li>
                <li>
                    <Link className="elem" to="/filmsStadists">Reviews</Link>
                </li>

            </ul>
        </nav>


    );
}




export default Links;