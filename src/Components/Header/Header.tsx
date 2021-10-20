import React from "react";
import  Links  from './Links/Links';
import logo from '../Images/logo.png';
import './Header.css'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {

    return <header className="headerApp">
        <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
        </div>
        <div> <Links/></div> 
       
    </header>;
}

export default Header;