import Participants, { ParticipantDocument } from "@models/Participant";

export async function retrieveTotalParticipation(): Promise<number> {
  const [totalParticipationPercentage] = await Participants.aggregate([
    { $group: { _id: null, total: { $sum: "$participation" } } },
  ]);
  return totalParticipationPercentage?.total || 0;
}

export async function retrieveParticipants(): Promise<
  Array<ParticipantDocument>
> {
  return (await Participants.find({})) as Array<ParticipantDocument>;
}
