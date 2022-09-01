import { useState,useCallback, useEffect } from "react";

import { addUser, displayEmp } from "./request";

const useUser = () => {
    const [emp, setEmp] = useState([])

    const submitUser = useCallback( async (values) => {
        addUser(values)
    })

    const displayEmployees = useCallback( async () => {
        const res = await displayEmp();
        setEmp(res.found)
        

    })

    useEffect(() => {
        displayEmployees()
    }, [displayEmployees])
   

    return { submitUser, emp}
}

export default useUser;