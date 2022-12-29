import "../components/css/user.css";
import Gicon from "../components/media/Google_icon.svg.webp"

function Login() {
    return <>
        <div className="lc">
            <button className="google-signin-btn">
                <img src={Gicon} alt="Google" />
                <span>Sign In with Google</span>
            </button>
        </div> 
    </>
}

export default Login;