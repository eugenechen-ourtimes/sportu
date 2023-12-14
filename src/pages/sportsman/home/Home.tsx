import NearbyCourts from "../court_list/NearbyCourts";
import Reservation from "../reservation/Reservation";

const Home = () => {
    return (
        <div>
            <Reservation/>
            <NearbyCourts/>
        </div>
    );
};

export default Home;
