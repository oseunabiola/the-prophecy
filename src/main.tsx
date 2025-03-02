import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/shared/layout.tsx";
import "./index.css";
import { Home } from "./pages/index.tsx";
import { Order } from "./pages/order.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ChakraProvider disableGlobalStyle={true} resetCSS={false}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/order" element={<Order />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
);
