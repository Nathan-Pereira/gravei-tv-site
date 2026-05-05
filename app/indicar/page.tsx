import type { Metadata } from "next";
import ReferYourCourt from "@/components/ReferYourCourt";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Indicar quadra",
  description:
    "Indica sua quadra preferida pro Gravei.tv e ganhe R$100 quando a instalação for concluída. Sem letra miúda.",
};

export default function IndicarPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ReferYourCourt />
      </main>
      <Footer />
    </>
  );
}
