import { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
    return <div className="wrapper | mx-auto w-10/12">{children}</div>;
};

export { PageContainer };
