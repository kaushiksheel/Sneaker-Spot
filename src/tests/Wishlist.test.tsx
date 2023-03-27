import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { describe, it } from "vitest";
import Wishlist from "../pages/Wishlist";

const queryClient = new QueryClient();

describe("ShoeCard Component", () => {
    it("Shoecard Renders correctly", () => {
        render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <RecoilRoot>
                        <Wishlist />
                    </RecoilRoot>
                </QueryClientProvider>
            </BrowserRouter>
        );
        expect(screen.getByTestId("wishlist")).toBeInTheDocument();
    });
});
describe("Header Component", () => {
    it("Header Renders correctly", () => {
        render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <RecoilRoot>
                        <Wishlist />
                    </RecoilRoot>
                </QueryClientProvider>
            </BrowserRouter>
        );
        expect(screen.getByTestId("header")).toBeInTheDocument();
    });
});
