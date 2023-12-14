import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END, VERSION } from "../../../config";
import CourtCard from "../../../components/court_card/CourtCard";
import "./court_list.scss";

const fetchDistance = async (
    courtId: number,
    lat: number,
    lng: number
): Promise<number | null> => {
    try {
        const response = await axios.get(
            `${BACK_END}/${VERSION}/spaces/${courtId}/distance?lat=${lat}&lng=${lng}`
        );
        return response.data.distance;
    } catch (error) {
        console.log("fetchDistance", error);
        return null;
    }
};

const CourtList = () => {
    const [courtCards, setCourtCards] = useState<Array<JSX.Element>>([]);
    const fetchCourtsAndUpdateDivs = (position: GeolocationPosition | null) => {
        axios.get(`${BACK_END}/${VERSION}/spaces`)
            .then(async (res) => {
                const newCourtCards = [];
                const courts = res.data;
                const n = courts.length;
                for (let i = 0; i < n; i++) {
                    const court = courts[i];
                    const distance = position === null ? null : await fetchDistance(
                        court.id,
                        position.coords.latitude,
                        position.coords.longitude
                    );

                    newCourtCards.push(
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

                setCourtCards(newCourtCards);
            }).catch((err) => {
                console.log("fetchCourtsAndUpdateDivs", err);
            });
    };

    useEffect(() => {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchCourtsAndUpdateDivs(position);
                },
                (error) => {
                    console.log("getCurrentPosition", error);
                    fetchCourtsAndUpdateDivs(null);
                });
        } else {
            fetchCourtsAndUpdateDivs(null);
        }
    }, []);

    return (
        <div className="sportsman-court-list">
            <div className="sportsman-court-list-title">球場資訊</div>
            {courtCards}
        </div>
    );
};

export default CourtList;
