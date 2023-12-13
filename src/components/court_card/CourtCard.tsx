import "./court_card.scss";

const CourtCard = () => {
    return (
        <div className="court-card">
            <img
                className="court-card-court-image"
                src={require("../../assets/images/court.png")}
                alt="球場照片"
            />
            <div className="court-card-middle">
                <div className="court-card-space-1"/>
                <div className="court-card-num-users">
                    使用人數&ensp;1/4
                </div>
                <div className="court-card-space-2"/>
                <div className="court-card-ball-type">
                    羽球場
                </div>
                <div className="court-card-space-3"/>
                <button
                    className="court-card-details"
                    type="button"
                >
                    詳細資訊
                </button>
            </div>
            <div className="court-card-bottom">
                <div className="court-card-court-name">
                    臺灣大學醉月湖湖心亭單挑
                </div>
                <div className="court-card-distance">
                    距離300公尺
                </div>
            </div>
        </div>
    );
};

export default CourtCard;
