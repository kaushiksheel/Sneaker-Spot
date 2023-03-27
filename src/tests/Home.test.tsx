import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { describe, it } from "vitest";
import { Header } from "../components/Header";
import Home from "../pages/Home";

const queryClient = new QueryClient();

describe("ShoeCard Component", () => {
    it("ShoeCard Renders Correctly", () => {
        render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <RecoilRoot>
                        <Home />
                    </RecoilRoot>
                </QueryClientProvider>
            </BrowserRouter>
        );
        expect(screen.getByTestId("shoecard-container")).toBeInTheDocument();
    });
});

describe("Hamburger Menu", () => {
    it("displays menu when hamburger button is clicked", () => {
        render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <RecoilRoot>
                        <Header />
                    </RecoilRoot>
                </QueryClientProvider>
            </BrowserRouter>
        );
        const button = screen.getByRole("button");
        const menu = screen.getByTestId("menu");
        expect(menu).toBeVisible();
        fireEvent.click(button);
        expect(menu).toBeVisible();
    });
});

describe("LogoutButton", () => {
    it("should be redirect to login page", () => {
        render(
            <MemoryRouter>
                <QueryClientProvider client={queryClient}>
                    <RecoilRoot>
                        <Header />
                    </RecoilRoot>
                </QueryClientProvider>
            </MemoryRouter>
        );
        const button = screen.getByTestId("logout-btn");
        fireEvent.click(button);
        expect(window.location.pathname).toBe("/");
    });
});
