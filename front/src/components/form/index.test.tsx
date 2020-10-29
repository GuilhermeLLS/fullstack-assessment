import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./index";
import { ParticipantData } from "../../types";

describe("<Form />", () => {
    test("should change input values", () => {
        const { getByTestId } = render(<Form />)

        const nameFieldNode = getByTestId("NameInput") as HTMLInputElement;
        const lastNameFieldNode = getByTestId("LastNameInput") as HTMLInputElement;
        const participationFieldNode = getByTestId("ParticipationInput") as HTMLInputElement;

        const fakeObj: ParticipantData = {
            name: "Teste",
            lastname: "Silva",
            participation: 20,
        };

        fireEvent.change(nameFieldNode, { target: { value: fakeObj.name } });
        fireEvent.change(lastNameFieldNode, { target: { value: fakeObj.lastname } });
        fireEvent.change(participationFieldNode, { target: { value: fakeObj.participation } });

        expect(nameFieldNode.value).toBe(fakeObj.name);
        expect(lastNameFieldNode.value).toBe(fakeObj.lastname);
        expect(participationFieldNode.value).toBe(fakeObj.participation.toString());

    });

});
