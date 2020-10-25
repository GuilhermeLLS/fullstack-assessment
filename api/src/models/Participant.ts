import mongoose from "mongoose"

const ParticipantsSchema = new mongoose.Schema(
    {
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
        }
    }
)

export default mongoose.model('Participants', ParticipantsSchema)