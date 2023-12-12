import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import LoginPage from "./pages/sportsman/login/LoginPage";
import LoggingInPage from "./pages/sportsman/login/LoggingInPage";
import RegistrationPage from "./pages/sportsman/registration/RegistrationPage";
import RegistrationSuccessPage from "./pages/sportsman/registration/RegistrationSuccessPage";
import HomePage from "./pages/sportsman/home/HomePage";
import ReservationPage from "./pages/sportsman/reservation/ReservationPage";
import ReservationCourtListPage from "./pages/sportsman/reservation/ReservationCourtListPage";
import MatchingStatusPage from "./pages/sportsman/matching_status/MatchingStatusPage";
import CourtListPage from "./pages/sportsman/court_list/CourtListPage";
import CourtDetailsPage from "./pages/sportsman/court_list/CourtDetailsPage";
import SignInPage from "./pages/sportsman/sign_in/SignInPage";
import MapPage from "./pages/sportsman/map/MapPage";

import ProviderLoginPage from "./pages/provider/login/LoginPage";
import ProviderHomePage from "./pages/provider/home/HomePage";

const Sportu = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<LoginPage/>}
                />
                <Route
                    path="/login"
                    element={<LoginPage/>}
                />
                <Route
                    path="/callback"
                    element={<LoggingInPage/>}
                />
                <Route
                    path="/registration"
                    element={<RegistrationPage/>}
                />
                <Route
                    path="/registration-success"
                    element={<RegistrationSuccessPage/>}
                />
                <Route
                    path="/home"
                    element={<HomePage/>}
                />
                <Route
                    path="/reservation"
                    element={<ReservationPage/>}
                />
                <Route
                    path="/reservation-court-list"
                    element={<ReservationCourtListPage/>}
                />
                <Route
                    path="/matching-status"
                    element={<MatchingStatusPage/>}
                />
                <Route
                    path="/court-list"
                    element={<CourtListPage/>}
                />
                <Route
                    path="/court-details"
                    element={<CourtDetailsPage/>}
                />
                <Route
                    path="/sign-in"
                    element={<SignInPage/>}
                />
                <Route
                    path="/map"
                    element={<MapPage/>}
                />
                <Route
                    path="/provider-login"
                    element={<ProviderLoginPage/>}
                />
                <Route
                    path="/provider-home"
                    element={<ProviderHomePage/>}
                />
            </Routes>
        </Router>
    );
};

export default Sportu;
