import { useState } from "react";
import axios from "axios";
import { BACK_END, VERSION } from "../../../config";
import CourtCard from "../../../components/court_card/CourtCard";
import { getSportId } from "../../../utils/local_storage/localStorage";
import "./nearby_courts.scss";

const NearbyCourts = () => {
    const [courtCards, setCourtCards] = useState<Array<JSX.Element>>([]);
    const fetchCourtsAndUpdateDivs = (position: GeolocationPosition, sportName: string) => {
        const uri = `${BACK_END}` +
                    `/${VERSION}` +
                    "/spaces/nearby?" +
                    `lat=${position.coords.latitude}` +
                    "&" +
                    `lng=${position.coords.longitude}` +
                    "&" +
                    `sportId=${getSportId(sportName)}` +
                    "&" +
                    "count=3";

        axios.get(uri)
            .then((res) => {
                const newCourtCards = [];
                const courts = res.data;
                const n = courts.length;
                for (let i = 0; i < n; i++) {
                    const court = courts[i];
                    newCourtCards.push(
                        <CourtCard
                            key={i}
                            numUsers={court.headcount}
                            capacity={court.capacity}
                            sportName={sportName}
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

    const handleConfirmSportType = () => {
        const element = document.getElementById("sportsman-nearby-courts-selector") as HTMLSelectElement;
        const sportName = element === null ? "籃球" : element.value;
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchCourtsAndUpdateDivs(position, sportName);
                },
                (error) => {
                    console.log("getCurrentPosition", error);
                });
        } else {
            console.log("geolocation is not supported");
        }
    };

    return (
        <div className="sportsman-nearby-courts">
            <div className="sportsman-nearby-courts-space-1"/>
            <div className="sportsman-nearby-courts-title">附近的球場</div>
            <div className="sportsman-nearby-courts-space-2"/>
            <div className="sportsman-nearby-courts-select-sport-type-wrapper">
                <label
                    className="sportsman-nearby-courts-select-sport-type"
                    htmlFor="sport-types"
                >
                    選擇球種:
                </label>
                <select
                    className="sportsman-nearby-courts-selector"
                    name="sport-types"
                    id = "sportsman-nearby-courts-selector"
                >
                    <option value="籃球">籃球</option>
                    <option value="排球">排球</option>
                    <option value="網球">網球</option>
                    <option value="羽球">羽球</option>
                    <option value="桌球">桌球</option>
                    <option value="棒球">棒球</option>
                    <option value="足球">足球</option>
                </select>
                <button
                    className="sportsman-nearby-courts-confirm"
                    onClick={handleConfirmSportType}
                >
                    確認
                </button>
            </div>
            <div className="sportsman-nearby-courts-space-3"/>
            {courtCards}
        </div>
    );
};

export default NearbyCourts;
