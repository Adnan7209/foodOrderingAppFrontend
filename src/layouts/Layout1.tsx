import Header from "@/components/custom/Header";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const Layout1 = ({ children }: PropsType) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};

export default Layout1;
