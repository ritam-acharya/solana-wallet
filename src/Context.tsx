import { createContext } from "react";

const UserContext = createContext(null);

export default function UserContextProvider({children}: {children: React.ReactNode}) {
    return <UserContext.Provider value={null}>
        {children}
    </UserContext.Provider>
}
