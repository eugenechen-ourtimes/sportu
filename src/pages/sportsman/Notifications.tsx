import { ReactComponent as Cancel } from "../../assets/images/icon/cancel.svg";
import "./notifications.scss";

type NotificationsProps = {
    handleCloseNotifications: () => void;
};

const Notifications = (props: NotificationsProps) => {
    return (
        <div className="sportsman-notifications">
            <div className="sportsman-notifications-cancel">
                <Cancel onClick={props.handleCloseNotifications}/>
            </div>
            <div className="sportsman-notifications-space-1"/>
            <div className="sportsman-notifications-notification-item">
                <div>
                    [即將開始] 台大體育館 - 羽球 1AF2<br/>
                    2023-10-14 11:00-15:00
                </div>
            </div>
        </div>
    );
};

export default Notifications;
