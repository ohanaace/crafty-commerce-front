import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const [authUser, setAuthUser] = useState(localUser !== null ? localUser : {});
    const navigate = useNavigate();
    const config = {headers: {Authorization: `Bearer ${localUser.token}`}}

    useEffect(() => {
        if (localUser === null) {
            navigate("/");
        } else {
            navigate("/home");
        }
    }, []);

    return (
        <UserContext.Provider value={{ authUser, setAuthUser, config }}>
            {children}
        </UserContext.Provider>
    );
}