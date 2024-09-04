import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";

function Header() {
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
                    <div className="search-parts">
                        <input className="search-input" />
                        <button className="search-button">
                            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;