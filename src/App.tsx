import { Header } from "./components/Header";
import { GrowthSection } from "./layouts/GrowthSection";
import { MotivationSection } from "./layouts/MotivationSection";
import { OrderSection } from "./layouts/OrderSection";

function App() {
  return (
    <>
      <div className=" mx-auto max-w-[428px] bg-[#F7F9FB]">
        <Header />
        <main className=" overflow-x-hidden px-8 pt-5">
          <MotivationSection />
          <OrderSection />
          <GrowthSection />
        </main>
      </div>
    </>
  );
}

export default App;
