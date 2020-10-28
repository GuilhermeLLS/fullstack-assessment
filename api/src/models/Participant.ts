import mongoose from "mongoose";

export interface ParticipantDocument extends mongoose.Document {
  _id: string;
  name: string;
  lastname: string;
  participation: number;
}

const ParticipantsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  participation: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Participants", ParticipantsSchema);
