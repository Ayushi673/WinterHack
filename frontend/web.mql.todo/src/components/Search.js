import React, { useState, useEffect } from "react";
import Hotels from './Hotels';
import './App.css';

export default function Search(props) {

    let [filteredHotels, setFilteredHotels] = useState([]);


    useEffect(()=>{
        const loadData = async(props) =>{
            console.log("My Props: " ,props.item);
            console.log(props.country);

            const places={
                Spain:{
                    "lng": 2.16942,
                    "lat": 41.40082
                },
                UnitedStates:{
                    "lng": -74.0060,
                    "lat": 40.7128
                },
                Brazil:{
                    "lng": -43.23074991429229,
                    "lat": -22.966253551739655
                },
                Canada:{
                    "lng": -73.54949,
                    "lat": 45.54548
                },
                HongKong:{
                    "lng": 114.17158,
                    "lat": 22.30469
                },
                Australia:{
                    "lng": 151.21554,
                    "lat": -33.88029
                },
                Portugal:{
                    "lng": -8.61308,
                    "lat": 41.1413
                }
            }
            var latitide, longitude;
            if(props.country === "Spain"){
                longitude=places.Spain.lng;
                latitide=places.Spain.lat;
            }
            else if(props.country === "United States"){
                longitude=places.UnitedStates.lng;
                latitide=places.UnitedStates.lat;
            }
            else if(props.country === "Brazil"){
                longitude=places.Brazil.lng;
                latitide=places.Brazil.lat;
            }
            else if(props.country === "Canada"){
                longitude=places.Canada.lng;
                latitide=places.Canada.lat;
            }
            else if(props.country === "Hong Kong"){
                longitude=places.HongKong.lng;
                latitide=places.HongKong.lat;
            }
            else if(props.country === "Australia"){
                longitude=places.Australia.lng;
                latitide=places.Australia.lat;
            }
            else if(props.country === "Portugal"){
                longitude=places.Portugal.lng;
                latitide=places.Portugal.lat;
            }
            else{
                longitude=places.UnitedStates.lng;
                latitide=places.UnitedStates.lat;
            }

            const response = await fetch("https://winterhack-searchapp.herokuapp.com/search",
            {
                method: "POST",
                "headers":{
                    "content-type":"application/json"
                },
                "body": JSON.stringify({
                    "query": props.item,
                    "position":{
                        "lng": longitude,
                        "lat": latitide
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
    },[props.item, props.country]);

    return (
    <div>
        <h1 className="hhh">Searching for ... {props.item} in {props.country}</h1>
        {
        filteredHotels.map((index,_id)=>(
            <Hotels key={_id} name={index.name} summary={index.summary} images={index.images.picture_url}
            link={index.listing_url} host={index.host} reviews={index.reviews} price={index.price.$numberDecimal} address={index.address} 
            cancellation_policy={index.cancellation_policy} interaction={index.interaction} transit={index.transit} access={index.access}
            accommodates={index.accommodates} beds={index.beds} bedrooms={index.bedrooms} amenities={index.amenities}
            />
        ))
        }
    </div>
    );
}

