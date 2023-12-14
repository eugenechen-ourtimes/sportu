import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Pager1 from "./Pager1";
import { BACK_END, VERSION } from "../../../config";
import { setBallTypeChtGameName } from "../../../utils/local_storage/localStorage";

const LoggingInPage = () => {
    const location = useLocation();
    const fetchBallTypesAndWriteToLocalStorage = async () => {
        try {
            const response = await axios.get(`${BACK_END}/${VERSION}/spaces/sports`);
            for (const ballType of response.data) {
                setBallTypeChtGameName(ballType.type, ballType.cht_game_name);
            }
        } catch (error) {
            console.log("fetchBallTypes");
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get("code");
        if (code) {
            axios.get(`https://admin.chillmonkey.tw/frontchecklogin?code=${code}`)
                .then(async (res) => {
                    const data = res.data;
                    console.log(data);
                    await fetchBallTypesAndWriteToLocalStorage();
                    const email = data.userInfo.email;
                    const userId = data.userInfo.id;
                    window.localStorage.setItem("email", email);
                    window.localStorage.setItem(email, userId);
                    window.location.href = "http://localhost:3000/home";
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <Pager1 isLoggingIn={true}/>
    );
};

export default LoggingInPage;
