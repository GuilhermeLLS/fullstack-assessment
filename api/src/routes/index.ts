import { Router } from "express"
import ParticipantsController from "@controllers/ParticipantsController"

const routes = Router()

routes.post('/participant', ParticipantsController.InsertParticipant)
routes.get('/participants', ParticipantsController.getParticipants)

export default routes