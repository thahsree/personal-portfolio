import { useEffect } from "react";
import { Hero, Introduction, SelectedWorks, Services } from "../components";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[100vh]">
      <Hero />
      <Services />
      <SelectedWorks />
      <Introduction />
    </div>
  );
}

export default Home;
