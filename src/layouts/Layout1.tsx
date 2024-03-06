import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  showHero?: boolean;
};

const Layout1 = ({ children, showHero = false }: PropsType) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}

      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout1;
