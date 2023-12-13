import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END, VERSION } from "../../../config";
import CourtCard from "../../../components/court_card/CourtCard";
import "./court_list.scss";

// Define interface for the court data
interface Court {
    id: number;
    capacity: number;
    ball_type: {
        cht_game_name: string;
    };
    name: string;
}

// Define interface for user location
interface UserLocation {
    lat: number | null;
    lng: number | null;
}

const CourtList = () => {
    const [courtCards, setCourtCards] = useState<Array<JSX.Element>>([]);
    const [userLocation, setUserLocation] = useState<UserLocation>({ lat: null, lng: null });

    // Function to get user's current location
    const getLocation = (): void => {
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
    const fetchDistance = async (court: Court): Promise<number | null> => {
        try {
            const response = await axios.get(`https://admin.chillmonkey.tw/v1/spaces/${court.id}/distance?lat=${userLocation.lat}&lng=${userLocation.lng}`);
            return response.data.distance;
        } catch (error) {
            console.error('Error fetching distance:', error);
            return null;
        }
    };

    useEffect(() => {
        getLocation();

        if (userLocation.lat !== null && userLocation.lng !== null) {
            axios.get(`${BACK_END}/${VERSION}/spaces`)
                .then(async (res) => {
                    const courts: Court[] = res.data;
                    const newCourtCards: Array<JSX.Element> = [];
                    for (let court of courts) {
                        const distance = await fetchDistance(court);
                        newCourtCards.push(
                            <CourtCard
                                key={court.id}
                                numUsers={1}
                                capacity={court.capacity}
                                ballTypeStr={court.ball_type.cht_game_name}
                                courtName={court.name}
                                distance={distance || 'N/A'}
                            />
                        );                    
                    }
                    setCourtCards(newCourtCards);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [userLocation]);

    return (
        <div className="sportsman-court-list">
            <div className="sportsman-court-list-title">球場資訊</div>
            {courtCards}
        </div>
    );
};

export default CourtList;
