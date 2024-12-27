import { Hero } from "../components";
import Introduction from "../components/Introduction";
import SelectedWorks from "../components/SelectedWorks";
import Services from "../components/Services";

function Home() {
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
