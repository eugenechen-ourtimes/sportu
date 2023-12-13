import { ReactComponent as Cancel } from "../../assets/images/icon/cancel.svg";
import "./menu.scss";

type MenuProps = {
    handleCloseMenu: () => void;
};

const Menu = (props: MenuProps) => {
    const handleShowHomePage = () => {
        window.location.href = "http://localhost:3000/home";
    };

    const handleReserveNow = () => {
        window.location.href = "http://localhost:3000/reservation";
    };

    const handleShowMatchingStatus = () => {
        window.location.href = "http://localhost:3000/matching-status";
    };

    const handleShowCourtList = () => {
        window.location.href = "http://localhost:3000/court-list";
    };

    const handleSignIn = () => {
        window.location.href = "http://localhost:3000/sign-in";
    };

    const handleLogout = () => {
        window.location.href = "http://localhost:3000/login";
    };

    return (
        <div className="sportsman-menu">
            <div className="sportsman-menu-cancel">
                <Cancel onClick={props.handleCloseMenu}/>
            </div>
            <div className="sportsman-menu-space-1"/>
            <button
                className="sportsman-menu-show-home-page"
                onClick={handleShowHomePage}
            >
                回首頁
            </button>
            <button
                className="sportsman-menu-reserve-now"
                onClick={handleReserveNow}
            >
                立即預約
            </button>
            <button
                className="sportsman-menu-matching-status"
                onClick={handleShowMatchingStatus}
            >
                我的配對
            </button>
            <button
                className="sportsman-menu-court-list"
                onClick={handleShowCourtList}
            >
                球場資訊
            </button>
            <button
                className="sportsman-menu-sign-in"
                onClick={handleSignIn}
            >
                報到
            </button>
            <button
                className="sportsman-menu-logout"
                onClick={handleLogout}
            >
                登出
            </button>
        </div>
    );
};

export default Menu;
