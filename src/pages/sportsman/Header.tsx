import { ReactComponent as MenuBar } from "../../assets/images/icon/menu-bar.svg";
import { ReactComponent as Bell } from "../../assets/images/icon/bell.svg";
import "./header.scss";

type HeaderProps = {
    handleShowMenu: () => void;
    handleShowNotifications: () => void;
};

const Header = (props: HeaderProps) => {
    const handleShowMap = () => {
        window.location.href = "http://localhost:3000/map";
    };

    return (
        <div className="sportsman-header">
            <div className="sportsman-header-menu-bar">
                <MenuBar onClick={props.handleShowMenu} />
            </div>
            <div className="sportsman-header-bell">
                <Bell onClick={props.handleShowNotifications} />
            </div>
            <div
                className="sportsman-header-map"
                onClick={handleShowMap}
            >
                地圖
            </div>
        </div>
    );
};

export default Header;
