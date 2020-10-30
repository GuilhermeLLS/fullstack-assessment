import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { ParticipantContextType } from "../../types";

export const DEFAULT_CONTEXT_STATE_VALUES = {
  data: [
    {
      name: "",
      lastname: "",
      participation: 0,
    },
  ],
  setData: () => {},
};

export const ParticipantsContext = createContext<ParticipantContextType>(
  DEFAULT_CONTEXT_STATE_VALUES
);

const ParticipantsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(DEFAULT_CONTEXT_STATE_VALUES.data);
  const retrieveApiData = async () =>
    await axios
      .get("http://localhost:4000/participants")
      .then((res) => res.data);

  useEffect(() => {
    retrieveApiData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <ParticipantsContext.Provider value={{ data, setData }}>
      {children}
    </ParticipantsContext.Provider>
  );
};

export default ParticipantsProvider;
