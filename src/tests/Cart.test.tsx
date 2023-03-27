import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { describe, it } from "vitest";
import { getSubtotal, getTotalQuantity } from "../helpers/cartCalculations";
import { IProducts } from "../interfaces/IProducts";
import Cart from "../pages/Cart";

const queryClient = new QueryClient();

// describe("CartItem Component", () => {
//     it("CartItem Renders Correctly", () => {
//         render(
//             <BrowserRouter>
//                 <QueryClientProvider client={queryClient}>
//                     <RecoilRoot>
//                         <Cart />
//                     </RecoilRoot>
//                 </QueryClientProvider>
//             </BrowserRouter>
//         );
//         expect(screen.getByTestId("cart-item")).toBeInTheDocument();
//     });
// });

describe("getSubtotal function", () => {
    it("should be return total of the products", () => {
        const cartItems = [
            { id: 1, name: "Item 1", price: 10, quantity: 2 },
            { id: 2, name: "Item 2", price: 5, quantity: 3 }
        ];
        const expectedTotal = 35;
        const subtotal = getSubtotal(cartItems as IProducts[]);
        expect(subtotal).toBe(expectedTotal);
    });
});

describe("getTotalQuantity function", () => {
    it("should be return total quantity of products", () => {
        const cartItems = [
            { id: 1, name: "Item 1", price: 10, quantity: 2 },
            { id: 2, name: "Item 2", price: 5, quantity: 3 }
        ];
        const expectedTotal = 5;
        const totalQuantity = getTotalQuantity(cartItems as IProducts[]);
        expect(totalQuantity).toBe(expectedTotal);
    });
});
