import { Participant } from "@models/Participant";

test("it should be ok", () => {
  const user = new Participant();

  user.name = "Diego";

  expect(user.name).toEqual("Diego");
});
