import "./pager1.scss";

type Pager1Props = {
    isLoggingIn: boolean;
};

const Pager1 = (props: Pager1Props) => {
    const clientId = "7dv888dumqvn3o45ri1l5g8osn";
    const redirectUri = "http://localhost:3000/callback";
    const handleLogin = () => {
        window.location.href = `https://sportu.auth.ap-northeast-1.amazoncognito.com/login?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    };

    const handleProviderLogin = () => {
        window.location.href = "http://localhost:3000/provider-login";
    };

    return (
        <div className="sportsman-pager-1">
            <div className="sportsman-pager-1-space-1"/>
            <img
                className="sportsman-pager-1-logo"
                src={require("../../../assets/images/logo.png")}
                alt="SPORTU"
            />
            <div className="sportsman-pager-1-space-2"/>
            <img
                className="sportsman-pager-1-runner"
                src={require("../../../assets/images/runner.jpg")}
                alt="一起運動"
            />
            <div className="sportsman-pager-1-space-3"/>
            <div className="sportsman-pager-1-login-wrapper">
                {
                    props.isLoggingIn ?
                        <div className="sportsman-pager-1-logging-in">登入中</div>
                        :
                        <button
                            className="sportsman-pager-1-login"
                            type="button"
                            onClick={handleLogin}
                        >
                            登入
                        </button>
                }
            </div>
            <div className="sportsman-pager-1-space-4"/>
            <div
                className="sportsman-pager-1-court-provider-login"
                onClick={handleProviderLogin}
            >
                我是廠商
            </div>
        </div>
    );
};

export default Pager1;
