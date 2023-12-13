import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END, VERSION } from "../../../config";
import CourtCard from "../../../components/court_card/CourtCard";
import "./court_list.scss";

const CourtList = () => {
    const [courtCards, setCourtCards] = useState<Array<JSX.Element>>([]);
    const [userLocation, setUserLocation] = useState({ lat: null, lng: null });

    // Function to get user's current location
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error Code = " + error.code + " - " + error.message);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    // Function to fetch distance for a court
    const fetchDistance = async (court) => {
        try {
            const response = await axios.get(`https://admin.chillmonkey.tw/v1/spaces/${court.id}/distance?lat=${userLocation.lat}&lng=${userLocation.lng}`);
            return response.data.distance; // Extracting distance from the response
        } catch (error) {
            console.error('Error fetching distance:', error);
            return null; // Return null or a default value in case of error
        }
    };

    useEffect(() => {
        getLocation(); // Get user's current location

        if (userLocation.lat !== null && userLocation.lng !== null) {
            axios.get(`${BACK_END}/${VERSION}/spaces`)
                .then(async (res) => {
                    const courtCards = [];
                    const courts = res.data;
                    for (let court of courts) {
                        const distance = await fetchDistance(court);
                        courtCards.push(
                            <CourtCard
                                key={court.id}
                                numUsers={1}
                                capacity={court.capacity}
                                ballTypeStr={court.ball_type.cht_game_name}
                                courtName={court.name}
                                distance={distance || 'N/A'} // Use fetched distance or display 'N/A' if not available
                            />
                        );                    
                    }
                    setCourtCards(courtCards);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [userLocation]); // Add userLocation as a dependency

    return (
        <div className="sportsman-court-list">
            <div className="sportsman-court-list-title">球場資訊</div>
            {courtCards}
        </div>
    );
};

export default CourtList;
