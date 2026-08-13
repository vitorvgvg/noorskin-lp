import Header from "./components/Header";
import Hero from "./components/Hero";
import LivingInConsciousness from "./components/LivingInConsciousness";
import NutritionalInfo from "./components/NutritionalInfo";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LivingInConsciousness />
        <NutritionalInfo />
        <Banner />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
