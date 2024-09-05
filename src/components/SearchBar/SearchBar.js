import React, { useState, useCallback } from "react";
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { setSearchTerm } from "../../features/searchReducer/searchReducer";

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setLocalSearchTerm] = useState('');
    const dispatch = useDispatch();

    const search = useCallback((event) => {
        event.preventDefault();
        if (searchTerm.trim() === ''){
            console.log('Üres a keresési mező'); // debug log
            return;
        }
        console.log("Keresés indult a kifejezéssel: ", searchTerm);  // debug log
        onSearch(searchTerm);
        dispatch(setSearchTerm(searchTerm));
        setLocalSearchTerm("");
    }, [dispatch, onSearch, searchTerm]);

    const handleInputChange = (event) => {
        setLocalSearchTerm(event.target.value);
    };
    
    return(
        <div className="search-parts">
            <form className="search" onSubmit={search}>
                <input
                    className="search-input"
                    type="search"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search"
                />
            </form>
            <button className="search-button" onClick={search}>
                <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
            </button>
    </div>
    );
};