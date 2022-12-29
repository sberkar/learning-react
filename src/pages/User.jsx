import { useAuth } from "../contexts/Auth-Context";

function User(){
    const { currentUser, logout } = useAuth()

    return <div className="uc">
        <div className="account-info">
            <div className="account-img">
                <img src={currentUser.photoURL} alt="" />
            </div>
            <div className="account-name">
                <h2>{currentUser.displayName}</h2>
            </div>
            <div className="account-email">
                <p>{currentUser.email}</p>
            </div>
            
            <div className="account-logout">
                <button onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    </div>
}

export default User;