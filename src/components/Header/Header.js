import React,  { useCallback } from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { SearchBar } from '../SearchBar/SearchBar';

function Header() {

    const handleSearch = useCallback((searchTerm) => {
        // Itt lesz az API
      }, []);

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-title">
                    <div className="client-logo">
                        <FontAwesomeIcon className="reddit-icon" icon={faRedditAlien} />
                    </div>
                    <h1 className="main-title">Reddit Client</h1>
                </div>
                <div className="search-zone">
                    <SearchBar onSearch={handleSearch}/>
                </div>
            </div>
        </div>
    )
}

export default Header;