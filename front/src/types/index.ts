export interface ParticipantData {
  name: string;
  lastname: string;
  participation: number;
}

export type ParticipantContextType = {
  data: ParticipantData[];
  setData: React.Dispatch<React.SetStateAction<ParticipantData[]>>;
};
