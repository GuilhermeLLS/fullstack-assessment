export interface ParticipantData {
    name: string;
    lastname: string;
    participation: number;
};

export type ContextContent = {
    data: ParticipantData[];
    setData: React.Dispatch<React.SetStateAction<ParticipantData[]>>;
};
