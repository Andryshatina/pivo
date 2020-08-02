import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <header className='header d-flex'>
            <div className='logo text-logo'>ПІВО</div>
            <Link to="/rand">
                <button className='btn btn-dark'>Що б мені сьогодні бахнуть?</button>
            </Link>
        </header>
    )
}
export default Header;
