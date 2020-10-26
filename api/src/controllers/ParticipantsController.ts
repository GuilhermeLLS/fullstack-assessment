import Participants from '@models/Participant'
import { retrieveTotalParticipation, retriveParticipants } from '@retrievers/index'
import { Request, Response } from 'express'

class ParticipantsController {
  async InsertParticipant(req: Request, res: Response) {
    const totalParticipationPercentage = await retrieveTotalParticipation()
    if (totalParticipationPercentage >= 100) {
      return res.status(404).send('A porcentagem total de participacao já é igual a 100. Nao e possivel adicionar mais participantes')
    }

    const newParticipation = req.body.participation
    if (totalParticipationPercentage + newParticipation > 100) {
      const maxParticipationLeft = 100 - totalParticipationPercentage
      return res.status(404).send(`A porcentagem total de participacao ficara maior que 100. Voce deve inserir um valor de participacao menor ou igual a ${maxParticipationLeft}`)
    }
    
    await Participants.create(req.body)
    const data = await retriveParticipants()
    return res.json(data)
  }

  async getParticipants(_: Request, res: Response) {
    const data = await retriveParticipants()
    return res.json(data)
  }
}

export default new ParticipantsController()
