import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END, VERSION } from "../../../config";
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
            <div className="sportsman-court-list-card">
                <img
                    className="sportsman-court-list-card-court-image"
                    src={require("../../../assets/images/court.png")}
                    alt="球場照片"
                />
                <div className="sportsman-court-list-card-middle">
                    <div className="sportsman-court-list-card-space-1"/>
                    <div className="sportsman-court-list-card-num-users">
                        使用人數&ensp;1/4
                    </div>
                    <div className="sportsman-court-list-card-space-2"/>
                    <div className="sportsman-court-list-card-ball-type">
                        羽球場
                    </div>
                    <div className="sportsman-court-list-card-space-3"/>
                    <button
                        className="sportsman-court-list-card-details"
                        type="button"
                    >
                        詳細資訊
                    </button>
                </div>
                <div className="sportsman-court-list-card-bottom">
                    <div className="sportsman-court-list-card-court-name">
                        臺灣大學醉月湖湖心亭單挑
                    </div>
                    <div className="sportsman-court-list-card-distance">
                        距離300公尺
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourtList;
