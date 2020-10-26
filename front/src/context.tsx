import React, { useEffect, useState } from "react"
import axios from "axios"

export const ParticipantsContext: React.Context<any> = React.createContext([])

const ParticipantsProvider: React.FC = ({ children }) => {
    const [data, setData] = useState([])
    const retrieveApiData = async () => await axios.get("http://localhost:4000/participants").then(res => res.data)

    useEffect(() => {
        retrieveApiData().then((data) => {
            setData(data)
        })
    }, [])

    return (
        <ParticipantsContext.Provider value={[data, setData]}>
            {children}
        </ParticipantsContext.Provider>
    );
}

export default ParticipantsProvider