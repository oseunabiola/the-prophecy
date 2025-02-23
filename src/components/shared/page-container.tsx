import { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto w-10/12 xl:w-[83%]">{children}</div>;
};

export { PageContainer };
