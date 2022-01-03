import React, { useState, useEffect } from "react";
import Hotels from './Hotels';

export default function Search(props) {

    let [filteredHotels, setFilteredHotels] = useState([]);


    useEffect(()=>{
        const loadData = async(props) =>{
            console.log("My Props: " ,props.item);
            const response = await fetch("https://winterhack-searchapp.herokuapp.com/search",
            {
                method: "POST",
                "headers":{
                    "content-type":"application/json"
                },
                "body": JSON.stringify({
                    "query": props.item,
                    "position":{
                        "lng": -74.0060,
                        "lat": 40.7128
                    }
                })
            });
            const data = await response.json();
            console.log(data);
            if(data.statusCode===500)
                setFilteredHotels([]);
            else
            setFilteredHotels(data);
        }
        loadData(props);
        // eslint-disable-next-line
    },[props.item]);

    return (
    <div>
        <h1>Searching for ... {props.item}</h1>
        {
        filteredHotels.map((index,_id)=>(
            <Hotels key={_id} name={index.name} summary={index.summary} images={index.images.picture_url}
            link={index.listing_url} host={index.host} reviews={index.reviews}
            />
        ))
        }
    </div>
    );
}

