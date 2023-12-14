import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END, VERSION } from "../../../config";
import CourtCard from "../../../components/court_card/CourtCard";
import { getBallTypeChtGameName } from "../../../utils/local_storage/localStorage";
import "./nearby_courts.scss";

const NearbyCourts = () => {
    const [courtCards, setCourtCards] = useState<Array<JSX.Element>>([]);
    const ballTypeNum = "1";
    const fetchCourtsAndUpdateDivs = (position: GeolocationPosition) => {
        const uri = `${BACK_END}` +
                    `/${VERSION}` +
                    "/spaces/nearby?" +
                    `lat=${position.coords.latitude}` +
                    "&" +
                    `lng=${position.coords.longitude}` +
                    "&" +
                    `sportId=${ballTypeNum}` +
                    "&" +
                    "count=3";
        console.log("uri", uri);
        axios.get(uri)
            .then(async (res) => {
                const newCourtCards = [];
                const courts = res.data;
                const n = courts.length;
                for (let i = 0; i < n; i++) {
                    const court = courts[i];
                    newCourtCards.push(
                        <CourtCard
                            key={i}
                            numUsers={1}
                            capacity={court.capacity}
                            ballTypeChtGameName={getBallTypeChtGameName(ballTypeNum)}
                            courtName={court.name}
                            distance={court.actual_distance}
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
                });
        } else {
            console.log("geolocation is undefined");
        }
    }, []);

    return (
        <div className="sportsman-nearby-courts">
            <div className="sportsman-nearby-courts-title">附近的球場</div>
            {courtCards}
        </div>
    );
};

export default NearbyCourts;
