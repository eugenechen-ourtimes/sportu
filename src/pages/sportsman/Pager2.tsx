
import { useState } from "react";
import Menu from "./Menu";
import Notifications from "./Notifications";
import Header from "./Header";
import Body from "./Body";
import "./pager2.scss";

type Pager2Props = {
    page: SportsmanPageName;
};

const Pager2 = (props: Pager2Props) => {
    const [shouldShowMenu, setShouldShowMenu] = useState(false);
    const [shouldShowNotifications, setShouldShowNotifications] = useState(false);

    const handleShowMenu = () => {
        setShouldShowNotifications(false);
        setShouldShowMenu(true);
    };

    const handleCloseMenu = () => {
        setShouldShowMenu(false);
    };

    const handleShowNotifications = () => {
        setShouldShowMenu(false);
        setShouldShowNotifications(true);
    };

    const handleCloseNotifications = () => {
        setShouldShowNotifications(false);
    };

    return (
        <div className="sportsman-pager-2">
            {
                shouldShowMenu ?
                    <Menu handleCloseMenu={handleCloseMenu}/>
                    :
                    null
            }
            {
                shouldShowNotifications ?
                    <Notifications handleCloseNotifications={handleCloseNotifications}/>
                    :
                    null
            }

            <Header
                handleShowMenu={handleShowMenu}
                handleShowNotifications={handleShowNotifications}
            />
            <Body page={props.page}/>
        </div>
    );
};

export default Pager2;
