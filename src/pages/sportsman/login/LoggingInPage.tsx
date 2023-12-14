import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Pager1 from "./Pager1";

const LoggingInPage = () => {
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get("code");
        if (code) {
            axios.get(`https://admin.chillmonkey.tw/frontchecklogin?code=${code}`)
                .then((res) => {
                    const data = res.data;
                    console.log(data);
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
