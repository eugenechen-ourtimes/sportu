import CourtDetails from "./court_list/CourtDetails";
import CourtList from "./court_list/CourtList";
import Home from "./home/Home";
import Map from "./map/Map";
import MatchingStatus from "./matching_status/MatchingStatus";
import Reservation from "./reservation/Reservation";
import ReservationCourtList from "./reservation/ReservationCourtList";
import SignIn from "./sign_in/SignIn";
import "./body.css";

type BodyProps = {
    page: SportsmanPageName
};

const Body = (props: BodyProps) => {
    return (
        <div className="sportsman-body">
            {
                props.page === "home" ?
                    <Home/>
                    :
                    null
            }
            {
                props.page === "reservation" ?
                    <Reservation/>
                    :
                    null
            }
            {
                props.page === "reservation-court-list" ?
                    <ReservationCourtList/>
                    :
                    null
            }
            {
                props.page === "matching-status" ?
                    <MatchingStatus/>
                    :
                    null
            }
            {
                props.page === "court-list" ?
                    <CourtList/>
                    :
                    null
            }
            {
                props.page === "court-details" ?
                    <CourtDetails/>
                    :
                    null
            }
            {
                props.page === "sign-in" ?
                    <SignIn/>
                    :
                    null
            }
            {
                props.page === "map" ?
                    <Map/>
                    :
                    null
            }
        </div>
    );
};

export default Body;
