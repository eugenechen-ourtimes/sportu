import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END, VERSION } from "../../../config";
import CourtCard from "../../../components/court_card/CourtCard";
import "./court_list.scss";

const CourtList = () => {
    const [courtCards, setCourtCards] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
        axios.get(`${BACK_END}/${VERSION}/spaces`)
            .then((res) => {
                const courtCards = [];
                const courts = res.data;
                const n = courts.length;
                for (let i = 0; i < n; i++) {
                    const court = courts[i];
                    courtCards.push(
                        <CourtCard
                            key={i}
                            numUsers={1}
                            capacity={court.capacity}
                            ballTypeStr={court.ball_type.cht_game_name}
                            courtName={court.name}
                            distance={300}
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
