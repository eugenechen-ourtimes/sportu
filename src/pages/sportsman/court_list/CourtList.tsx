import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END, VERSION } from "../../../config";
import CourtCard from "../../../components/court_card/CourtCard";
import "./court_list.scss";

const CourtList = () => {
    const [courts, setCourts] = useState([]);

    useEffect(() => {
        axios.get(`${BACK_END}/${VERSION}/spaces`)
            .then((res) => {
                setCourts(res.data);
            }).catch((err) => {
                console.log(err);
            });
    });

    return (
        <div className="sportsman-court-list">
            <div className="sportsman-court-list-title">球場資訊</div>
            <CourtCard/>
        </div>
    );
};

export default CourtList;
