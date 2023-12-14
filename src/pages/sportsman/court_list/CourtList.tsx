import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END, VERSION } from "../../../config";
import CourtCard from "../../../components/court_card/CourtCard";
import "./court_list.scss";

interface UserLocation {
    lat: number | null;
    lng: number | null;
}

const CourtList = () => {
    const [courtCards, setCourtCards] = useState<Array<JSX.Element>>([]);
    const [userLocation, setUserLocation] = useState<UserLocation>({ lat: null, lng: null });

    const getLocation = () => {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });

                    console.log("getLocation", position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    console.log("getLocation", error);
                }
            );
        }
    };

    const fetchDistance = async (court: any): Promise<number | null> => {
        try {
            const response = await axios.get(`https://admin.chillmonkey.tw/v1/spaces/${court.id}/distance?lat=${userLocation.lat}&lng=${userLocation.lng}`);
            return response.data.distance;
        } catch (error) {
            console.log("fetchDistance", error);
            return null;
        }
    };

    useEffect(() => {
        getLocation();
        axios.get(`${BACK_END}/${VERSION}/spaces`)
            .then(async (res) => {
                const courtCards = [];
                const courts = res.data;
                const n = courts.length;
                for (let i = 0; i < n; i++) {
                    const court = courts[i];
                    const distance = await fetchDistance(court);
                    courtCards.push(
                        <CourtCard
                            key={i}
                            numUsers={1}
                            capacity={court.capacity}
                            ballTypeStr={court.ball_type.cht_game_name}
                            courtName={court.name}
                            distance={distance}
                        />
                    );                    
                }
                setCourtCards(courtCards);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="sportsman-court-list">
            <div className="sportsman-court-list-title">球場資訊</div>
            {courtCards}
        </div>
    );
};

export default CourtList;
