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
    const [country, setCountry] = useState('United States');
  
    const changeCountry = (chosenCountry) => {
        setCountry(chosenCountry);
    }

    return(
        <div>
        <div className="App-header">
            <p>Hi!</p>
            <p className='mmm'><b>Discover your next best "STAY"cation right here, right now!</b></p>
            <input type="text"
            style={styles.inputStyle}
            value={searchInput}
            placeholder="Enter preference"
            onChange={(e) => {
            setSearchInput(e.target.value)}
            } />
            <p>Country:</p>
            <select className="selectCountry"
            onChange={(event) => changeCountry(event.target.value)}
            value={country}>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Portugal">Portugal</option>
            <option value="Spain">Spain</option>
            <option value="United States">United States</option>
            </select>
          
        </div>
        <div style={{padding: "25px 30px 75px 100px"}}>
            <Search item={searchInput} country={country}/>
        </div>
        </div>
        )
}
