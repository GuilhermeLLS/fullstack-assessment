import React, { useState } from 'react'
import axios from 'axios'

export const ParticipantsContext: React.Context<any> = React.createContext([])

const retrieveApiData = () => axios.get('http://localhost:4000/participants').then(response => response.data)

const ParticipantsProvider: React.FC = ({ children }) => {
    // const data = retrieveApiData()
    const fakedata = [
        { "_id": "5f943b5ed7aca3067f0b407d", "name": "asd", "lastname": "ased", "participation": 6, "__v": 0 },
        { "_id": "5f943b5ed7aca3067f0b407d", "name": "asd", "lastname": "ased", "participation": 6, "__v": 0 },
        { "_id": "5f944129c88a4b086c01c3f5", "name": "Guilherme", "lastname": "Luiz", "participation": 44, "__v": 0 },
        { "_id": "5f944129c88a4b086c01c3f5", "name": "Guilherme", "lastname": "Luiz", "participation": 44, "__v": 0 }
    ]
    const [data, setData] = useState(fakedata)
    // setData(fakedata)
    return (
        <ParticipantsContext.Provider value={[data, setData]}>
            {children}
        </ParticipantsContext.Provider>
    );
}

export default ParticipantsProvider