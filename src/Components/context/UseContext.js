import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../../firebase/firbaseConfig"

export const UserContextApi = createContext()
export const UserContextProvider = ({ children }) => {
    const [isAdmin, setAdmin] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    console.log(currentUser)
    console.log("isAdmin >>", isAdmin)
    useEffect(() => {
        if (currentUser?.email.includes("uldasevamunavvar881@gmail.com")) {
            setAdmin(true)
        }
        else {
            setAdmin(false)
        }
    }, [currentUser])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        });
    }, [])

    return (<UserContextApi.Provider value={{ currentUser }}>{children}</UserContextApi.Provider>)
}