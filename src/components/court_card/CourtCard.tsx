import "./court_card.scss";

type CourtCardProps = {
    numUsers: number;
    numMaxUsers: number;
    ballTypeStr: string;
    courtName: string;
    distance: number;
};

const CourtCard = (props: CourtCardProps) => {
    const getDistanceStr = (distance: number) => {
        if (distance < 1000) {
            return "距離" + distance.toString() + "公尺";
        } else {
            return "距離" + (distance / 1000).toString() + "公里";
        }
    };

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
                    使用人數&ensp;{props.numUsers}/{props.numMaxUsers}
                </div>
                <div className="court-card-space-2"/>
                <div className="court-card-ball-type">
                    {props.ballTypeStr}場
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
                    {props.courtName}
                </div>
                <div className="court-card-distance">
                    {getDistanceStr(props.distance)}
                </div>
            </div>
        </div>
    );
};

export default CourtCard;
