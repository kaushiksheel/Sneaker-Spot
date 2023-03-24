import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Login from "../pages/Login";

describe("Login", () => {
    it("Renders Login to SneakerSpot", () => {
        render(<Login />);
        expect(
            screen.getByRole("heading", {
                level: 3
            })
        ).toHaveTextContent("Login to SneakerSpot");
    });
});
