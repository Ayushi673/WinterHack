import './App.css';
import { useState } from 'react';
import Search from './Search.js';

export default function Home() {

    const [searchInput, setSearchInput] = useState('a');

    return(
        <div>
        <div className="App-header">
            <p>Search for hotels:</p>
            <input type="text"
            value={searchInput}
            placeholder="Enter preference"
            onChange={(e) => {
            setSearchInput(e.target.value)}
            } />
        </div>
        <div style={{padding: "25px 30px 75px 100px"}}>
            <Search item={searchInput}/>
        </div>
        </div>
        )
}
