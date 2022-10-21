import { useState, useEffect } from "react"
export const useISADMIN = (argument) => {
    const [isAdmin, setAdmin] = useState(false)

    useEffect(() => {
        if (argument?.email.includes("uldasevamunavvar881@gmail.com")) {
            setAdmin(true)
        }
        else {
            setAdmin(false)
        }
    }, [argument])

    return { isAdmin }
}