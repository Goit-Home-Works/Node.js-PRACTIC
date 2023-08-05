import {useContext} from "react";
import {AuthContext} from "../context/auth.context";

const useAuth = () => {
    const {accessToken} = useContext(AuthContext);
    return Boolean(accessToken)
}

export default useAuth;