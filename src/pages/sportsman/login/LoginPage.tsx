import "./login_page.scss";

const LoginPage = () => {
    const handleLogin = () => {
        window.location.href = "http://localhost:3000/home";
    };

    const handleProviderLogin = () => {
        window.location.href = "http://localhost:3000/provider-login";
    };

    return (
        <div className="sportsman-login-page">
            <div className="sportsman-login-page-space-1"/>
            <img
                className="sportsman-login-page-logo"
                src={require("../../../assets/images/logo.png")}
                alt="SPORTU"
            />
            <div className="sportsman-login-page-space-2"/>
            <img
                className="sportsman-login-page-runner"
                src={require("../../../assets/images/runner.jpg")}
                alt="一起運動"
            />
            <div className="sportsman-login-page-space-3"/>
            <button
                className="sportsman-login-page-log-in"
                type="button"
                onClick={handleLogin}
            >
                登入
            </button>
            <div className="sportsman-login-page-space-4"/>
            <div
                className="sportsman-login-page-court-provider-login"
                onClick={handleProviderLogin}
            >
                我是廠商
            </div>
        </div>
    );
};

export default LoginPage;
