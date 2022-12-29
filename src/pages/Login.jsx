import { redirect } from "react-router-dom";
import "../components/css/user.css";
import Gicon from "../components/media/Google_icon.svg.webp"
import { useAuth } from "../contexts/Auth-Context";

function Login() {
    const { signIn } = useAuth()
    return <>
        <div className="lc">
            <button className="google-signin-btn" onClick={signIn}>
                <img src={Gicon} alt="Google" />
                <span>Sign In with Google</span>
            </button>
        </div> 
    </>
}

export default Login;