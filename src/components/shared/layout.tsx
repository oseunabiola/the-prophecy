import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./nav";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="grid-rows-[auto_1fr_auto] pt-7 xl:pt-14">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export { Layout };
