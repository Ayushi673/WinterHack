import './App.css';
import { useState } from 'react';
import Search from './Search.js';

const styles={
    inputStyle:{
        width: "50%",
        height: "40px",
        borderRadius: "25px",
        padding: "1px 12px"
    }
}

export default function Home() {

    const [searchInput, setSearchInput] = useState('a');

    return(
        <div>
        <div className="App-header">
            <p>Hi!</p>
            <p><b>Discover your next best "STAY"cation right here, right now!</b></p>
            <input type="text"
            style={styles.inputStyle}
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
