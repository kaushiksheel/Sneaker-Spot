import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Orders from "../pages/Orders";

describe("Orders", () => {
    it("Renders orders", () => {
        render(<Orders />);
        expect(
            screen.getByRole("heading", {
                level: 1
            })
        ).toHaveTextContent("Orders");
    });
});
