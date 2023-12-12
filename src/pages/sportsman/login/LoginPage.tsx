import "./login_page.scss";

const LoginPage = () => {
    const handleLogin = () => {
        window.location.href = "http://localhost:3000/home";
    };

    return (
        <div className="login-page">
            <div className="login-page-space1"/>
            <img
                className="login-page-logo"
                src={require("../../../assets/images/logo.png")}
                alt="SPORTU"
            />
            <div className="login-page-space2"/>
            <img
                className="login-page-runner"
                src={require("../../../assets/images/runner.jpg")}
                alt="一起運動"
            />
            <div className="login-page-space3"/>
            <input
                className="login-page-email"
                type="text"
                placeholder="電子信箱"
            />
            <div className="login-page-space4"/>
            <input
                className="login-page-password"
                type="password"
                placeholder="密碼"
            />
            <div className="login-page-space5"/>
            <button
                className="login-page-log-in"
                type="button"
                onClick={handleLogin}
            >
                登入
            </button>
            <div className="login-page-space6"/>
            <div className="login-page-register-text">
                <span>
                    還沒有帳號?&ensp;
                </span>
                <span
                    className="login-page-register-link"
                    onClick={() => {}}
                >
                    立即註冊
                </span>
            </div>
            <div className="login-page-space7"/>
            <div
                className="login-page-court-provider-login"
                onClick={() => {}}
            >
                我是廠商
            </div>
        </div>
    );
};

export default LoginPage;
