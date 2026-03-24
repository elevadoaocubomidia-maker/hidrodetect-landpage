import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import LocalContext from "./components/LocalContext";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Services />
        <Differentials />
        <LocalContext />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
