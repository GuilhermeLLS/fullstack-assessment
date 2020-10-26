import Participants from '@models/Participant'
import { Request, Response } from 'express'

class ParticipantsController {
  async InsertParticipant (req: Request, res: Response) {
    await Participants.create(req.body)
    const data = await Participants.find({})
    return res.json(data)
  }

  async getParticipants(req: Request, res: Response) {
    const data = await Participants.find({})
    return res.json(data)
  }
}

export default new ParticipantsController()