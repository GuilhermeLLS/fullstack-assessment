import Participants from "@models/Participant";
import {
  retrieveTotalParticipation,
  retrieveParticipants,
} from "@retrievers/index";
import { Request, Response } from "express";

class ParticipantsController {
  async InsertParticipant(req: Request, res: Response) {
    const totalParticipationPercentage = await retrieveTotalParticipation();
    if (totalParticipationPercentage >= 100) {
      return res
        .status(404)
        .send(
          "A porcentagem total de participacao já é igual a 100. Não é possível adicionar mais participantes"
        );
    }

    const newParticipation = Number(req.body.participation);
    if (totalParticipationPercentage + newParticipation > 100) {
      const maxParticipationLeft = 100 - totalParticipationPercentage;
      return res
        .status(404)
        .send(
          `A porcentagem total de participacao ficará maior que 100. Voce deve inserir um valor de participacao menor ou igual a ${maxParticipationLeft}`
        );
    }

    await Participants.create(req.body);
    const data = await retrieveParticipants();
    return res.json(data);
  }

  async getParticipants(_: Request, res: Response) {
    const data = await retrieveParticipants();
    return res.json(data);
  }

  async deleteParticipants(_: Request, res: Response) {
    await Participants.remove({});
    return res.json([]);
  }
}

export default new ParticipantsController();
